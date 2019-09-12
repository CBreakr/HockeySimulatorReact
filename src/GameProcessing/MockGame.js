
import { dispatchActions } from "../Reducers/gameActions";

const countLimit = 20;
const eventDelay = 500;

class MockGame {
  constructor(dispatch){
    this.dispatch = dispatch;
  }

  initializeGame(){
    this.resetGame();
    this.generateTeams();
  }

  resetGame(){
    this.count = 0;
    this.gameTimer = null;
    this.gameOn = false;
    this.finished = false;
    if(this.home_team){
      this.home_team.reset();
    }
    if(this.away_team){
      this.away_team.reset();
    }
  }

  resetGameWithNewTeams(){
    this.resetGame();
    this.generateTeams();
  }

  resetGameAndStart(){
    this.resetGame();
    this.startGame();
  }

  generateTeams(){
    this.home_team = new MockTeam(`home_team ${randomString()}`);
    this.away_team = new MockTeam(`away_team ${randomString()}`);
  }

  startGame(){
    this.gameOn = true;
    this.generateEvent();
  }

  pauseGame(){
    if(this.gameTimer){
      clearTimeout(this.gameTimer);
      this.gameOn = false;
    }
  }

  checkTie(){
    return this.home_team.goals === this.away_team.goals;
  }

  generateEvent(){
    let event = null;
    console.log(`event: ${this.count}/${countLimit}`);

    if(this.count < countLimit || this.checkTie()){
      const overtime = (this.count >= countLimit);
      this.count++;
      event = new MockEvent(this.count, null, overtime);
    }

    if(event){
      console.log("event", this.dispatch);
      dispatchActions.addEvent(this.dispatch, event);
      this.processEvent(event);
    }

    if(this.count >= countLimit && !this.checkTie()){
      console.log("GAME OVER");
      this.count++;
      this.gameOn = false;
      this.finished = true;
      event = new MockEvent(this.count, "GAME OVER");
      dispatchActions.addEvent(this.dispatch, event);
      this.processEvent(event);
    }
    else{
      this.gameTimer = setTimeout(() => {
        this.generateEvent();
      }, eventDelay);
    }
  }

  processEvent(event){
    switch(event.type){
      case "HOME GOAL":
        this.home_team.addGoal();
        break;
      case "AWAY GOAL":
        this.away_team.addGoal();
        break;
      case "HOME SHOT":
        this.home_team.addShot();
        break;
      case "AWAY SHOT":
        this.away_team.addShot();
        break;
      case "GAME OVER":
        const home_goals = this.home_team.goals;
        const away_goals = this.away_team.goals;
        if(home_goals > away_goals){
          this.home_team.setWon();
        }
        else if(away_goals > home_goals){
          this.away_team.setWon();
        }

        break;
      default:
        ;
    }
  }
}

class MockTeam {
  constructor(name){
    this.team_name = name;
    this.goals = 0;
    this.shots = 0;
    this.players = [];
    this.won = false;
    this.wins = 0;
  }

  reset(){
    this.goals = 0;
    this.shots = 0;
    this.won = false;
  }

  setWon(){
    this.won = true;
    this.wins++;
  }

  addShot(){
    this.shots++;
  }

  addGoal(){
    this.shots++;
    this.goals++;
  }
}

class MockEvent {
  constructor(index, type, overtime) {
    if(type){
      this.type = type;
      this.value = null;
      this.color = "#FFF";
    }
    else{
      this.value = Math.random();
      if(overtime){
        this.color = "#E44";
      }
      else{
        this.color = generateRandomBrightColor();
      }

      if(this.value > 0.95){
        this.type = "HOME GOAL";
        this.highlight = true;
      }
      else if(this.value > 0.9){
        this.type = "AWAY GOAL";
        this.highlight = true;
      }
      else if(this.value > 0.7){
        this.type = "HOME SHOT";
      }
      else if(this.value > 0.5){
        this.type = "AWAY SHOT";
      }
      else {
        this.type = "WAIT";
      }
    }

    this.index = index;
  }
}

function generateRandomBrightColor(){
  const red = 130 + Math.random()*125;
  const green = 130 + Math.random()*125;
  const blue = 130 + Math.random()*125;
  return `rgb(${red}, ${green}, ${blue})`;
}

function randomString(){
  return makeid(3);
}

// from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript#comment13624090_1349426
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export default MockGame;
