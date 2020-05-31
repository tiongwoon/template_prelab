import React, { useState, useEffect } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Motivation from "./components/pages/Motivation";
import Theory from "./components/pages/Theory";
import Safety from "./components/pages/Safety";
import Home from "./components/pages/Home";
import {  ThemeProvider } from "@chakra-ui/core";
import Lab from "./components/pages/Lab";
import Simulation from "./components/pages/Simulation";
import Feedback from "./components/elements/Feedback";

// const customTheme = {
//   ...theme,
//   fonts: {
//     heading: '"Fira Sans", sans-serif ',
//     body: '"Fira Sans", sans-serif ',
//     mono: '"Fira Sans", sans-serif ',
//   },
// };

function App() {
  //create this to count the number of 'complete' clicks for the SaveProgress function
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  ); //search for previous state saved in localstorage

  //a counter for the progress bar, create a global state here
  function handleProgressClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    localStorage.setItem("counter", counter); //here because setState is async so will end up saving old state to storage instead of updated one
  }, [counter]);

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          {/* simply remove the code snippet within the <> tag if wish to remove that section */}
          <Home counter={counter} path="/" />
          <Motivation
            counter={counter}
            progress={() => handleProgressClick()}
            path="/motivation"
          />
          <Safety
            counter={counter}
            progress={() => handleProgressClick()}
            path="/safety"
          />
          <Simulation
            counter={counter}
            path="/simulation"
            progress={() => handleProgressClick()}
          />
          <Theory
            counter={counter}
            progress={() => handleProgressClick()}
            path="/theory"
          />
          <Lab
            counter={counter}
            path="/lab"
            progress={() => handleProgressClick()}
          />
        </Router>
        <Feedback />
      </ThemeProvider>
    </div>
  );
}

export default App;
