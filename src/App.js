import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

import MainAppDisplay from "./Components/MainAppDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <MainAppDisplay />
      </Router>
    </div>
  );
}

export default App;
