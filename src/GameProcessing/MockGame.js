
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
    this.home_team = new MockTeam("home_team");
    this.away_team = new MockTeam("away_team");
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
      this.gameTimer = setTimeout(() => {
        this.generateEvent();
      }, eventDelay);
    }
    else if(this.count === countLimit){
      console.log("GAME OVER");
      this.count++;
      this.gameOn = false;
      this.finished = true;
      event = new MockEvent(this.count, "GAME OVER");
    }

    if(event){
      console.log("event", this.dispatch);
      dispatchActions.addEvent(this.dispatch, event);
    }
  }
}

class MockTeam {
  constructor(type){
    this.team_name = type;
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

export default MockGame;
