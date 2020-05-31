import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Stack, Button, Collapse } from "@chakra-ui/core";
import Header from "../elements/Header";
import Sidebar from "../elements/Sidebar";
import MathJax from "react-mathjax2";
import ProgressButton from "../elements/ProgressButton";
import * as math from "mathjs";

export default function Simulation(props) {
  //for progress button state
  const [completeSimulationSection, setcompleteSimulationSection] = useState(
    localStorage.getItem("completeSimulationSection") || "notdone"
  );

  function turnOffSimulationButton() {
    setcompleteSimulationSection("done");
  }

  useEffect(() => {
    localStorage.setItem(
      "completeSimulationiSection",
      completeSimulationSection
    );
  }, [completeSimulationSection]);

  let canvasRef = useRef();

  //function to handle the quiz

  const [valueOne, setvalueOne] = useState("");
  const [valueTwo, setvalueTwo] = useState(""); //to hold the state for question 2
  const [valueThree, setvalueThree] = useState("");

  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false); //stores the state for each button
  const [showThree, setShowThree] = useState(false);

  const [answerOne, setanswerOne] = useState("");
  const [answerTwo, setanswerTwo] = useState("");
  const [answerThree, setanswerThree] = useState("");

  function submitHandler(event, questionNumber) {
    if (questionNumber === 1) {
      let eventValueOne = valueOne;
      setanswerOne(eventValueOne);
      event.preventDefault();
    } else if (questionNumber === 2) {
      setanswerTwo(valueTwo);
      event.preventDefault();
    } else if (questionNumber === 3) {
      setanswerThree(valueThree);
      event.preventDefault();
    }
  }

  function changeHandler(event, questionNumber) {
    if (questionNumber === 1) {
      setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers and holds the single source of truth
    } else if (questionNumber === 2) {
      setvalueTwo(event.target.value);
    } else if (questionNumber === 3) {
      setvalueThree(event.target.value);
    }
  }


  function handleToggle(questionNumber) {
    if (questionNumber === 1) {
      setShow(!show);
    } else if (questionNumber === 2) {
      setShowTwo(!showTwo);
    } else if (questionNumber === 3) {
      setShowThree(!showThree);
    }
  }

  //Either use this or use the GeneralQuizBox Code
  //solution for the quiz
  function Solution(props) {
    if (props.questionNumber === 1) {
      return (
        <center>
          Solution 1
        </center>
      );
    } else if (props.questionNumber === 2) {
      return (
        <center>
          Solution 2
        </center>
      );
    } else if (props.questionNumber === 3) {
      return (
        <center>
          <MathJax.Context>
            <MathJax.Node>F_(Drag)=mg</MathJax.Node>
          </MathJax.Context>
          Solution 3
        </center>
      );
    }
  }

  function Answer(questionNumber) {
    if (questionNumber === 1) {
      if (math.round(answerOne) === 6) {
        return (
          <div>
            <p style={{ color: "#66A40A" }}>Correct!</p>
            <Button
              style={showSolutionButtonStyle}
              onClick={() => handleToggle(1)}
            >
              Show solution
            </Button>
            <Collapse isOpen={show} marginTop="0.7em">
              <br></br>
              <Solution questionNumber={1} />
            </Collapse>
          </div>
        );
      } else {
        return (
          <div>
            <p style={{ color: "#DD2501" }}>Wrong, try again.</p>
            <Button
              style={showSolutionButtonStyle}
              onClick={() => handleToggle(1)}
            >
              Show solution
            </Button>
            <Collapse isOpen={show} marginTop="0.7em">
              <br></br>
              <Solution questionNumber={1} />
            </Collapse>
          </div>
        );
      }
    } else if (questionNumber === 2) {
      //this is question number 3, drag coefficient
      return (
        <div>
          {math.round(answerTwo, 2) === 0.28 ? (
            <p style={{ color: "#66A40A" }}>Correct</p>
          ) : (
            <p style={{ color: "#DD2501" }}>Wrong, try again.</p>
          )}
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(2)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showTwo} marginTop="0.7em">
            <br></br>
            <Solution questionNumber={2} />
          </Collapse>
        </div>
      );
    } else if (questionNumber === 3) {
      return (
        <div>
          {math.round(answerThree, 3) === 0.059 ? (
            <p style={{ color: "#66A40A" }}>Correct</p>
          ) : (
            <p style={{ color: "#DD2501" }}>Wrong, try again.</p>
          )}

          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(3)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showThree} marginTop="0.7em">
            <br></br>
            <Solution questionNumber={3} />
          </Collapse>
        </div>
      );
    }
  }

  //anything that needs to change and respond, put in here
  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

  }); //end of useEffect

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Simulation" />
        <section className="textArea">
          Example Text
        </section>
        <section className="canvasCheckboxContainer">
          <div className="canvasButtonContainer">
            <canvas
              style={canvasPosition}
              ref={canvasRef}
              width={525}
              height={325}
            >
              Please update to the latest browser to display graphic element.
              This is an animation simulating the process you will be doing in
              the actual lab.
            </canvas>

          </div>
          <div className="checkBoxContainer">

            <p>Simulation Content to be created</p>
          </div>
        </section>

        <div style={quizContainerStyle}>
          <ol>
            <li>
              <div style={addMargin}>
                Question 1 
              </div>
              <form onSubmit={(event) => submitHandler(event, 1)}>
                <input
                  name="answer"
                  type="string"
                  onChange={(event) => changeHandler(event, 1)}
                  className="quizInputBox"
                />
                <MathJax.Context input="tex">
                  <MathJax.Node inline>g~~</MathJax.Node>
                </MathJax.Context>
                <input
                  type="submit"
                  value="Check Answer"
                  className="quizCheckButton"
                />{" "}
                <br></br>
              </form>
              {answerOne ? Answer(1) : null}
            </li>

            <li>
              <div style={addMargin}>Question 2</div>
              <form onSubmit={(event) => submitHandler(event, 3)}>
                <input
                  name="answer"
                  type="string"
                  onChange={(event) => changeHandler(event, 3)}
                  className="quizInputBox"
                />
                <MathJax.Context input="tex">
                  <MathJax.Node inline>N~~</MathJax.Node>
                </MathJax.Context>
                <input
                  type="submit"
                  value="Check Answer"
                  className="quizCheckButton"
                />{" "}
                <br></br>
              </form>
              {answerThree ? Answer(3) : null}
            </li>

            <li>
              <div style={addMargin}>
                What is the drag coefficient of the disc? (Compare its value to
                the one in the Theory section. What could be the reason they are
                different?)
              </div>
              <form onSubmit={(event) => submitHandler(event, 2)}>
                <input
                  name="answer"
                  type="string"
                  onChange={(event) => changeHandler(event, 2)}
                  className="quizInputBox"
                />
                <input
                  type="submit"
                  value="Check Answer"
                  className="quizCheckButton"
                />{" "}
                <br></br>
              </form>
              {answerTwo ? Answer(2) : null}
            </li>
          </ol>
        </div>

        {completeSimulationSection === "notdone" ? (
          <ProgressButton
            progress={props.progress}
            counter={props.counter}
            toggle={turnOffSimulationButton}
            sectionName="simulation"
          />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Simulation" />
    </>
  );
}

const canvasPosition = {
  position: "relative",
  marginLeft: "5vw",
  top: "10vh",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
};

const buttonStyle = {
  backgroundColor: "#006EAF",
  border: "none",
  borderRadius: "4px",
  color: "#FFFFFF",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
  position: "relative",
  left: "5vw",
  top: "12.5vh",
  fontSize: "1.5em",
  padding: "0.8em",
  height: "auto",
  fontWeight: "900",
  cursor: "pointer",
  maxWidth: "525px",
  marginBottom: "5vh",
  marginRight: "5vw",
};

const altButtonStyle = {
  backgroundColor: "#3A3A3A",
  border: "none",
  borderRadius: "4px",
  color: "#006EAF",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
  position: "relative",
  left: "5vw",
  top: "12.5vh",
  fontSize: "1.5em",
  padding: "0.8em",
  height: "auto",
  fontWeight: "900",
  cursor: "pointer",
  maxWidth: "525px",
  marginBottom: "5vh",
  marginRight: "5vw",
};

const showSolutionButtonStyle = {
  backgroundColor: "#D4EFFC",
  border: "none",
  borderRadius: "4px",
  color: "#003E74",
  cursor: "pointer",
};

const addMargin = {
  marginTop: "2em",
};

const quizContainerStyle = {
  position: "relative",
  paddingLeft: "5vw",
  top: "7.5vh",
  display: "block",
  marginBottom: "4.5em",
};
