
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

  generateEvent(){
    let event = null;
    console.log(`event: ${this.count}/${countLimit}`);

    if(this.count < countLimit){
      this.count++;
      event = new MockEvent(this.count);
    }

    if(event){
      console.log("event", this.dispatch);
      dispatchActions.addEvent(this.dispatch, event);
    }

    if(this.count === countLimit){
      console.log("GAME OVER");
      this.count++;
      this.gameOn = false;
      this.finished = true;
      event = new MockEvent(this.count, "GAME OVER");
      dispatchActions.addEvent(this.dispatch, event);
    }
    else{
      this.gameTimer = setTimeout(() => {
        this.generateEvent();
      }, eventDelay);
    }
  }
}

class MockTeam {
  constructor(name){
    this.team_name = name;
    this.goals = 0;
    this.shots = 0;
    this.players = [];
  }
}

class MockEvent {
  constructor(index, type) {
    if(type){
      this.type = type;
      this.value = null;
      this.color = "#FFF";
    }
    else{
      this.type = "RANDOM";
      this.value = Math.random();
      this.color = generateRandomBrightColor();
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
