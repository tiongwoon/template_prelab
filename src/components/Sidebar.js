import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/core";
//import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  //write a function to check which section and returns the classname accordingly
  function className(order) {
    if (order === 1) {
      if (props.name === "Home") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    } else if (order === 2) {
      if (props.name === "Motivation") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    } else if (order === 3) {
      if (props.name === "Theory") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    } else if (order === 4) {
      if (props.name === "Lab") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    } else if (order === 5) {
      if (props.name === "Drag Balance") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    } else if (order === 6) {
      if (props.name === "Safety") {
        return "hoverBuddy active";
      } else {
        return "hoverBuddy";
      }
    }
  }

  function dropDownTrigger() {
    var x = document.getElementById("smallMenu");
    if (x.className === "dropdownContainer") {
      x.className += " responsive";
    } else {
      x.className = "dropdownContainer";
    }
  }

  return (
    <div>
      <div className="sideBarContainer">
        <img
          src={require("../assets/logo_white.png")}
          alt="logo"
          style={logoStyle}
        />
        <nav>
          <ul>
            <a href="/">
              <li className={className(1)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/home-run.svg")}
                />
                Home
              </li>
            </a>
            <a href="/motivation">
              <li className={className(2)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/youtube.svg")}
                />
                Motivation
              </li>
            </a>
            <a href="/theory">
              <li className={className(3)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/book.svg")}
                />
                Theory
              </li>
            </a>
            <a href="/lab">
              <li className={className(4)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/lab.svg")}
                />
                The Lab
              </li>
            </a>
            <a href="/dragbalance">
              <li className={className(5)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/libra.svg")}
                />
                Drag Balance
              </li>
            </a>
            <a href="/safety">
              <li className={className(6)}>
                <img
                  style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
                  src={require("../assets/warning.svg")}
                />
                Safety
              </li>
            </a>
          </ul>
        </nav>
        <center style={{ marginTop: "1.5em" }}>
          <CircularProgress
            size="8vw"
            thickness={0.1}
            color="teal"
            value={(props.counter / 5) * 100}
          >
            <CircularProgressLabel color="white" fontSize="17px">
              Your Progress
            </CircularProgressLabel>
          </CircularProgress>
        </center>
      </div>

      {/* The following is for dropdown menu in small screens */}
      <div className="dropdownContainer" id="smallMenu">
        <button onClick={dropDownTrigger} className="dropdownMenuIcon">
          &#9776;
        </button>
        <a href="/" className={className(1)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/home-run.svg")}
          />
          Home
        </a>
        <a href="/motivation" className={className(2)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/youtube.svg")}
          />
          Motivation
        </a>
        <a href="/theory" className={className(3)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/book.svg")}
          />
          Theory
        </a>
        <a href="/lab" className={className(4)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/lab.svg")}
          />
          The Lab
        </a>
        <a href="/dragbalance" className={className(5)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/libra.svg")}
          />
          Drag Balance
        </a>
        <a href="/safety" className={className(6)}>
          <img
            style={{ inlineSize: "1.6em", paddingRight: "0.8em" }}
            src={require("../assets/warning.svg")}
          />
          Safety
        </a>
        <center style={{ marginTop: "1.5em" }}>
          <CircularProgress
            size="12.5vh"
            thickness={0.1}
            color="teal"
            value={(props.counter / 5) * 100}
          >
            <CircularProgressLabel color="white" fontSize="15px">
              Your Progress
            </CircularProgressLabel>
          </CircularProgress>
        </center>
      </div>
    </div>
  );
}

const logoStyle = {
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  width: "15vw",
  padding: "0.5em",
};

/*<link  to=''>Motivation</link>
                <link  to=''>Theory</link>
                <link  to=''>The Lab</link>
                <link  to=''>Safety</link>

                <nav>
                <navStyle>Motivation</navStyle>

            </nav>
                <div >Theory</div>
                <div >The Lab</div>
                <div >Safety</div>*/
