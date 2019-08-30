import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

import MainAppDisplay from "./Components/MainAppDisplay";
import TestReduxSaga from "./Components/TestReduxSaga";

function App() {
  return (
    <div className="App">
      <Router>
        <MainAppDisplay />
        <TestReduxSaga />
      </Router>
    </div>
  );
}

export default App;
