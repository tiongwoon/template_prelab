import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Motivation from './components/Motivation';
import Theory from './components/Theory';
import Safety from './components/Safety';
import Home from './components/layout/Home';
import { ThemeProvider } from "@chakra-ui/core";
import Lab from './components/Lab';
import Canvas from './components/elements/Canvas';

function App() {

  //create this to count the number of 'complete' clicks for the SaveProgress function
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('counter')) || 0); //search for previous state saved in localstorage

  //a counter for the progress bar, create a global state here
  function handleProgressClick() {
    setCounter(counter + 1);
    console.log(counter);
    localStorage.setItem('counter', counter) //store to local storage the key-value pair
  }

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
        <Home counter={counter} path="/"/>                     
          <Motivation progress={() => handleProgressClick()} path='/motivation' />
          <Safety progress={() => handleProgressClick()} path='/safety' />
          <Canvas path='/dragbalance' progress={() => handleProgressClick()}/>
          <Theory progress={() => handleProgressClick()} path='/theory' />
          <Lab path='/lab' progress={() => handleProgressClick()} />
        </Router>
      
      </ThemeProvider>
    </div>
  );
}

export default App;

//problem now
/**1. lost the state when we switch page
 * 2. need to separate progress button and progress bar,, only render progress bar at home page and progress button 
 * at anything else
 *  <ProgressBar counter={counter} path="/j" />
 * <SectionCards path="/" />
      <Header path="/" />
      <ProgressButton progress={() => handleProgressClick()} path="l" />      
 */