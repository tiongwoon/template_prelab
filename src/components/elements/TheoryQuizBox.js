import React, { useState } from "react";
import { Collapse, Button } from "@chakra-ui/core";
import MathJax from "react-mathjax2";
//import NormalDistribution from "normal-distribution";
import * as math from "mathjs";

export default function TheoryQuizBox() {
  //const maxSpeed = 20;
  //to generate and calculate answer for wake profile
  // const mean = math.randomInt(10, 17);
  // const std = math.randomInt(2, 8);
  // const normDist = new NormalDistribution(mean, std);
  // const v1 = normDist.pdf(mean);
  // const v4 = normDist.pdf(std * 2);
  // const r2 = std / 3 + mean;
  // const r3 = (std / 3) * 2 + mean;
  // const v2 = normDist.pdf(r2);
  // const v3 = normDist.pdf(r3);
  // const V1 = math.round(maxSpeed - maxSpeed * v1);
  // const V4 = math.round(maxSpeed - maxSpeed * v4);
  // const V2 = math.round(maxSpeed - maxSpeed * v2);
  // const V3 = math.round(maxSpeed - maxSpeed * v3);

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

    const lineOne = `{\\rho  U_{0} \\pi  \\mathrm{H^{2}} ~ = ~ \\int\\limits_{A}\\rho  \\overrightarrow{u} \\cdot  \\overrightarrow{dA} } `;
    const lineTwo = `{= \\rho ~ \\int\\limits_{0}^{R}u(r) \\cdot2 \\pi r ~ dr}`;
    const lineThree = `{F_\\mathrm{drag} ~=~U_0 [~\\rho ~ \\int\\limits_{0}^{R} u(r) \\cdot 2 \\pi r ~ dr~] ~ - ~ \\rho \\int\\limits_{0}^{R} u(r)^{2} \\cdot 2\\pi r ~ dr} `;
    const lineFour = `{F_\\mathrm{drag} ~=~ 2 \\pi \\rho \\int\\limits_{0}^{R} u \\cdot (U_{0}-u) \\cdot r ~ dr}`;
    const lineFive = `{\\int\\limits_{0}^{R} u \\cdot (U_{0}-u) \\cdot r ~ dr~~ \\mathrm{is ~approximated~ to}~~ \\frac{\\Delta x}{2}[y_{1} + 2(y_{2}+y_{3}) + y_{4}]}`;
    const lineSix = `{ \\mathrm{where} ~~ y=u(r) \\cdot (U_{0}-u(r)) \\cdot r}`;
    const lineSeven = `{=~ 0.0543~N~ (3 s.f.)}`;

    const solutionTwo = `{F_\\mathrm{{drag}} ~=~ C_\\mathrm{D} \\times \\frac{\\rho {v^2}}{2} \\times A}`;
    const solutionTwo_two = `{C_\\mathrm{D} = 0.255}`;

    //the object for answers
    const solutions = {
      answer: [0.05, 0.26],

      working: [
        <div>
          Using a streamline control volume, we eliminate the need to consider
          mass flow out via the side. But we need to define the radius of the
          streamline inlet. We use mass balance to find.
          <MathJax.Context input="tex">
            <MathJax.Node>{lineOne}</MathJax.Node>
          </MathJax.Context>
          <br></br>Using annular differential elements, the right hand side
          becomes<br></br>
          <MathJax.Context input="tex">
            <center>
              {" "}
              <MathJax.Node>{lineTwo}</MathJax.Node>
            </center>
          </MathJax.Context>
          <br></br>We now have an expression for H. Then, we use momentum
          balance to find the drag force. Substituting the expression for H into
          the equation, we have
          <MathJax.Context input="tex">
            <center>
              {" "}
              <MathJax.Node>{lineThree}</MathJax.Node>
            </center>
          </MathJax.Context>
          Which simplifies to <br></br>
          <MathJax.Context input="tex">
            <MathJax.Node>{lineFour}</MathJax.Node>
          </MathJax.Context>{" "}
          <br></br> Since we are given the data, we can use numerical integral
          methods to compute the integral, for this solution we will use
          trapezoid rule to compute. But you can also use other techniques such
          as the rectangule approximation.
          <MathJax.Context input="tex">
            <center>
              {" "}
              <MathJax.Node>{lineFive}</MathJax.Node>{" "}
            </center>
          </MathJax.Context>
          <MathJax.Context input="tex">
            <center>
              {" "}
              <MathJax.Node>{lineSix}</MathJax.Node>{" "}
            </center>
          </MathJax.Context>
          <MathJax.Context input="tex">
            <center>
              {" "}
              <MathJax.Node>{lineSeven}</MathJax.Node>{" "}
            </center>
          </MathJax.Context>
        </div>,

        <div>
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

  const dragCoefficient = `{C_\\mathrm{D}}`;

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
            In this lab, we will be using mass and momentum conservation to
            derive drag force. You can refer to the content starting from page
            69 in the ME1 notes to refresh your understanding. Please revisit
            the 'Submarine Question', which is replicated in your previous and
            current tutorial sheets as below:
            <br></br>
            <br></br>
            <ul>
              <li>
                <strong>
                  ME1 Fluid Mechanics 1 Tutorial Sheet 9 Question 2{" "}
                </strong>
                (Please note the difference in frame of reference will result in
                different representation of wake velocity profile. ie. Fixed
                frame,{" "}
                <MathJax.Context input="tex">
                  <MathJax.Node inline>u</MathJax.Node>
                </MathJax.Context>{" "}
                is maximum at the axis and zero at{" "}
                <MathJax.Context input="tex">
                  <MathJax.Node inline>r=R</MathJax.Node>
                </MathJax.Context>
                . Moving frame with the submarine,{" "}
                <MathJax.Context input="tex">
                  <MathJax.Node inline>u</MathJax.Node>
                </MathJax.Context>{" "}
                is zero at the axis and maximum at{" "}
                <MathJax.Context input="tex">
                  <MathJax.Node inline>r=R</MathJax.Node>
                </MathJax.Context>{" "}
                .)
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
            For the example measured wake profile below, estimate the drag on
            the object assuming atmospheric pressure everywhere.
            <img
              style={imageStyle}
              src={require("../../assets/streamline.jpg")}
              alt="A streamline control volume drawn around an object."
            />
            <br></br>
            <img
              className="tableImage"
              src={require("../../assets/table.jpg")}
              alt="A table with data values for radial distance from axis and its corresponding airflow speed."
            />
            <br></br>
            <form onSubmit={submitHandlerOne}>
              <label style={{ display: "block", paddingTop: "1em" }}>
                Estimate the drag force on the object assuming atmospheric
                pressure everywhere.
              </label>
              <input
                name="answer"
                type="number"
                step="0.0001"
                onChange={changeHandlerOne}
                className="quizInputBox"
              />
              <MathJax.Context input="tex">
                <MathJax.Node inline>N ~~</MathJax.Node>
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
              This question is similar to question 1. The only difference here
              is that data is given for the velocity. So, you need to think of a
              way to find the integral, or in other words, the sum.
            </Collapse>
            {answerOne ? Answer(1) : null}
            <br></br>
          </li>
          <li>
            <form onSubmit={submitHandlerTwo}>
              <label for="answer" style={{ display: "block" }}>
                Given that the object has a radius of 28mm, using the drag force
                calculated from question 2, work out the drag coefficient,{" "}
                <MathJax.Context input="tex">
                  <MathJax.Node inline>{dragCoefficient}</MathJax.Node>
                </MathJax.Context>
                .
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
