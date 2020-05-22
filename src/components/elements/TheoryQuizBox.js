import React, { useState } from "react";
import { Collapse, Button } from "@chakra-ui/core";
import MathJax from "react-mathjax2";
import NormalDistribution from "normal-distribution";
import * as math from "mathjs";

export default function TheoryQuizBox() {
  const maxSpeed = 20;
  //to generate and calculate answer for wake profile
  const mean = math.randomInt(10, 17);
  const std = math.randomInt(2, 8);
  const normDist = new NormalDistribution(mean, std);
  const v1 = normDist.pdf(mean);
  const v4 = normDist.pdf(std * 2);
  const r2 = std / 3 + mean;
  const r3 = (std / 3) * 2 + mean;
  const v2 = normDist.pdf(r2);
  const v3 = normDist.pdf(r3);
  const V1 = math.round(maxSpeed - maxSpeed * v1);
  const V4 = math.round(maxSpeed - maxSpeed * v4);
  const V2 = math.round(maxSpeed - maxSpeed * v2);
  const V3 = math.round(maxSpeed - maxSpeed * v3);

  console.log(mean);
  console.log(r2);
  console.log(r3);
  console.log(mean + std);
  //console.log(std);
  //console.log(maxV);
  console.log("pdf of mean is" + " " + v1);
  console.log("pdf of std is" + " " + v4);
  console.log(V1);
  console.log(V2);
  console.log(V3);
  console.log(V4);

  //need to write out the function to calculate trapz

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
    <div>
      <div className="textArea">
        In this section, we will explore some theories required for you to
        understand the lab. Below are 2 questions to help you strengthen your conceptual
        understanding.
    </div>

      <div style={containerForQuizHeader}>
        <div className="secondaryHeader">Exercises</div>

        <br></br>
        <p className="textAreaFloating">
          1. In this lab, we will be using mass and momentum conservation to
          derive drag force. You can refer to the content in page XX in ME1
          notes to refresh your understanding. Please revisit the 'Submarine
          Question', which is replicated in your previous and current tutorial
          sheets as below:
          <br></br>
          <br></br>
          &emsp; a. ME1 Fluid Mechanics 1 Tutorial Sheet 9 Question 2 (Please
          note the difference in frame of reference will result in different
          representation of wake velocity profile. ie. Fixed frame, u is maximum
          at the axis and zero at r=R, Moving frame with the submarine, u is
          zero at the axis and maximum at r=R.)
          <br></br>
          <br></br>
          &emsp; b. ME2 Fluid Mechanics 2 Tutorial Sheet 1 Question 3.
          <br></br>
          <br></br>
          <a
            href="http://bb.imperial.ac.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              border="none"
              bg="#006EAF"
              color="#FFFFFF"
              _hover={{
                boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.25)",
                bg: "#006EAF",
                cursor: "pointer",
              }}
            >
              Go to Blackboard
            </Button>
          </a>
          <br></br>
          <br></br>
          2. For the example measured wake profile below, estimate the drag on
          the object assuming atmospheric pressure everywhere.
          <img
            style={imageStyle}
            src={require("../../assets/streamline.jpg")}
          />
          <br></br>
          <img className="tableImage" src={require("../../assets/table.jpg")} />
          <br></br>
          <form onSubmit={submitHandlerOne}>
            <input
              name="answer"
              type="string"
              onChange={changeHandlerOne}
              className="quizInputBox"
            />
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>
          <Button
            variantColor="#3A3A3A"
            variant="outline"
            onClick={handleToggleHint}
          >
            Hint
          </Button>
          <Collapse isOpen={showHint} marginTop="0.7em">
            This question is similar to question 1. The only difference here is
            that data is given for the velocity. So, you need to think of a way
            to find the integral, or in other words, the sum.
          </Collapse>
          {answerOne ? Answer(1) : null}
          <br></br>
          3. Given that the object has a radius of 28mm, using the drag force
          calculated from question 2, work out the drag coefficient,{" "}
          <MathJax.Context input="tex">
            <MathJax.Node inline>{dragCoefficient}</MathJax.Node>
          </MathJax.Context>
          .
          <form onSubmit={submitHandlerTwo}>
            <input
              name="answer"
              type="string"
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
        </p>
      </div>
    </div>
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
