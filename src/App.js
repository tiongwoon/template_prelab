import React, { useState, useEffect } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Motivation from './components/Motivation';
import Theory from './components/Theory';
import Safety from './components/Safety';
import Home from './components/layout/Home';
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Lab from './components/Lab';
import Canvas from './components/elements/Canvas';


const customTheme = {
  ...theme,
  fonts: {
    heading: '"Fira Sans", sans-serif ',
    body: '"Fira Sans", sans-serif ',
    mono: '"Fira Sans", sans-serif '
  }
}


function App() {
  //create this to count the number of 'complete' clicks for the SaveProgress function
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('counter')) || 0); //search for previous state saved in localstorage

  //a counter for the progress bar, create a global state here
  function handleProgressClick() {
    setCounter(counter + 1);
    console.log(counter);
  }

  useEffect(() => {
    localStorage.setItem('counter', counter); //here because setState is async so will end up saving old state to storage instead of updated one
  }, [counter]);


  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Home counter={counter} path="/" />
          <Motivation progress={() => handleProgressClick()} path='/motivation' />
          <Safety progress={() => handleProgressClick()} path='/safety' />
          <Canvas path='/dragbalance' progress={() => handleProgressClick()} />
          <Theory progress={() => handleProgressClick()} path='/theory' />
          <Lab path='/lab' progress={() => handleProgressClick()} />
        </Router>
      </ThemeProvider>

    </div>
  );

}

export default App;

