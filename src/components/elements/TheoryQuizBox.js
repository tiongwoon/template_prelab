import React, { useState } from "react";
import { Collapse, Button } from "@chakra-ui/core";
import MathJax from "react-mathjax2";
//import NormalDistribution from "normal-distribution";
import * as math from "mathjs";

export default function TheoryQuizBox() {
  //for the collapse
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  function handleToggle(questionNumber) {
    if (questionNumber === 1) {
      setShowOne(!showOne);
    } else if (questionNumber === 2) {
      setShowTwo(!showTwo);
    }
  }

  function showCollapse(questionNumber) {
    if (questionNumber === 1) {
      return showOne;
    } else if (questionNumber === 2) {
      return showTwo;
    }
  }

  const [showHint, setShowHint] = useState(false);
  const handleToggleHint = () => setShowHint(!showHint);

  //for the answer box
  const [valueOne, setvalueOne] = useState("");
  const [valueTwo, setvalueTwo] = useState("");
  const [answerOne, setanswerOne] = useState(""); //validate if answer is true
  const [answerTwo, setanswerTwo] = useState("");

  function submitHandlerOne(event) {
    const eventValue = valueOne;
    setanswerOne(eventValue);
    event.preventDefault();
  }

  function changeHandlerOne(event) {
    setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  function submitHandlerTwo(event) {
    const eventValue = valueTwo;
    setanswerTwo(eventValue);
    event.preventDefault();
  }

  function changeHandlerTwo(event) {
    setvalueTwo(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  function Answer(questionNumber) {
    //to store the state of user's answers
    let answerState = [answerOne, answerTwo];
    let userAnswer = JSON.parse(answerState[questionNumber - 1]);

    const solutionTwo = `{F_\\mathrm{{drag}} ~=~ C_\\mathrm{D} \\times \\frac{\\rho {v^2}}{2} \\times A}`;
    const solutionTwo_two = `{C_\\mathrm{D} = 0.255}`;

    //the object for answers
    const solutions = {
      answer: [0.05, 0.26],

      working: [
        <div>
          <p>
            Working solution one.
          </p>
        </div>,

        <div>
          <p>Example</p>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionTwo}</MathJax.Node>
          </MathJax.Context>
          <br></br>Substituting the given values,
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionTwo_two}</MathJax.Node>
          </MathJax.Context>
        </div>,
      ],
    };

    if (
      math.round(userAnswer, 2) <=
        solutions.answer[questionNumber - 1] * 1.25 &&
      math.round(userAnswer, 2) >= solutions.answer[questionNumber - 1] / 1.25
    ) {
      //setting a range here to allow for error
      return (
        <div>
          <p style={{ color: "#66A40A" }}>Correct!</p>
          <br></br>
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ color: "#DD2501" }}>Wrong, Try again.</p>
          <br></br>
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    }
  }


  return (
    <section>
      <article className="textArea">
        To prepare for the lab, it is important that you remember the content in
        the Conservation of Momentum chapter. Below are 3 questions to help you
        refresh and strengthen your conceptual understanding.
      </article>

      <article style={containerForQuizHeader}>
        <h1 className="secondaryHeader">Exercises</h1>

        <br></br>
        <ol className="textAreaFloating">
          <li>
            Example Text with link button to Blackboard. Used when need students to revisit certain tutorial sheet questions etc.
            <br></br>
            <br></br>
            <ul>
              <li>
                <strong>
                  ME1 Fluid Mechanics 1 Tutorial Sheet 9 Question 2
                </strong>
              </li>
              <li>
                <strong>
                  ME2 Fluid Mechanics 2 Tutorial Sheet 1 Question 3.
                </strong>
              </li>
            </ul>
            <br></br>
            <a
              href="http://bb.imperial.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="quizCheckButton">Go To Blackboard</button>
            </a>
            <p>
              <em>This link will open a new tab.</em>
            </p>
            <br></br>
          </li>
          <li>
            Question One 
            <img
              style={imageStyle}
              src={require("../../assets/streamline.jpg")}
              alt="A streamline control volume drawn around an object."
            />
            <br></br>
            <form onSubmit={submitHandlerOne}>
              <label style={{ display: "block", paddingTop: "1em" }}>
                Question One 
              </label>
              <input
                name="answer"
                type="number"
                step="0.0001"
                onChange={changeHandlerOne}
                className="quizInputBox"
              />
              <MathJax.Context input="tex">
                <MathJax.Node inline>Units ~~</MathJax.Node>
              </MathJax.Context>
              <input
                type="submit"
                value="Check Answer"
                className="quizCheckButton"
              />{" "}
              <br></br>
            </form>
            <Button
              variantColor="black"
              backgroundColor="#fff"
              cursor="pointer"
              border="none"
              variant="link"
              onClick={handleToggleHint}
            >
              Hint
            </Button>
            <Collapse isOpen={showHint} marginTop="0.7em">
              Hint Text
            </Collapse>
            {answerOne ? Answer(1) : null}
            <br></br>
          </li>
          <li>
            <form onSubmit={submitHandlerTwo}>
              <label for="answer" style={{ display: "block" }}>
                Question Two
              </label>
              <input
                name="answer"
                type="number"
                step="0.0001"
                onChange={changeHandlerTwo}
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
      </article>
    </section>
  );
}

const containerForQuizHeader = {
  position: "relative",
  paddingLeft: "5vw",
  top: "10vh",
  display: "inline-block",
  width: "100%",
  paddingBottom: "8em",
};

const showSolutionButtonStyle = {
  backgroundColor: "#D4EFFC",
  border: "none",
  borderRadius: "4px",
  color: "#003E74",
  marginTop: "1em",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "1.5em",
  display: "block",
};
