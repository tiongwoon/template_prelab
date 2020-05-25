import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Stack, Button, Collapse } from "@chakra-ui/core";
import Header from "./Header";
import Sidebar from "../Sidebar";
import MathJax from "react-mathjax2";
import ProgressButton from "./ProgressButton";
import * as math from "mathjs";

export default function Canvas(props) {
  //for progress button state
  const [completeDragBalanceSection, setcompleteDragBalanceSection] = useState(
    localStorage.getItem("completeDragBalanceSection") || "notdone"
  );

  function turnOffDragBalanceButton() {
    setcompleteDragBalanceSection("done");
  }

  useEffect(() => {
    localStorage.setItem(
      "completeDragBalanceSection",
      completeDragBalanceSection
    );
  }, [completeDragBalanceSection]);

  //for the drag balance drawing
  const size = {
    length: 500,
    width: 20,
    dx: 0.1,
    dy: 0.1,
    angle: 0,
  };

  let canvasRef = useRef();

  //universal state for variables
  const [mass, setmass] = useState(0);
  const [dialGaugeAngle, setdialGaugeAngle] = useState(0);
  const [dragForce, setdragForce] = useState(0);
  const [air, setair] = useState(false);

  //to toggle the checkboxes
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const [counterFive, setcounterFive] = useState(0);
  const [counterTen, setcounterTen] = useState(0);
  const [counterHundred, setcounterHundred] = useState(0);

  const [countersecondOne, setcountersecondOne] = useState(0);
  const [countersecondTwo, setcountersecondTwo] = useState(0);
  const [countersecondFive, setcountersecondFive] = useState(0);
  const [countersecondTen, setcountersecondTen] = useState(0);
  const [countersecondHundred, setcountersecondHundred] = useState(0);

  //group of functions for checkboxes and button

  function onAirFlow() {
    setdragForce(60);
    setair(true);
  }

  function offAirFlow() {
    setdragForce(0);
    setair(false);
  }

  function checkBoxOne() {
    setcounterOne(counterOne + 1);

    if (counterOne % 2 === 0) {
      setmass(mass + 1);
    } else if (counterOne > 0 && counterOne % 2 === 1) {
      setmass(mass - 1);
    }
  }

  function checkBoxTwo() {
    setcounterTwo(counterTwo + 1);

    if (counterTwo % 2 === 0) {
      setmass(mass + 2);
    } else if (counterTwo > 0 && counterTwo % 2 === 1) {
      setmass(mass - 2);
    }
  }

  function checkBoxFive() {
    setcounterFive(counterFive + 1);

    if (counterFive % 2 === 0) {
      setmass(mass + 3);
    } else if (counterFive > 0 && counterFive % 2 === 1) {
      setmass(mass - 3);
    }
  }

  function checkBoxTen() {
    setcounterTen(counterTen + 1);

    if (counterTen % 2 === 0) {
      setmass(mass + 4);
    } else if (counterTen > 0 && counterTen % 2 === 1) {
      setmass(mass - 4);
    }
  }

  function checkBoxHundred() {
    setcounterHundred(counterHundred + 1);

    if (counterHundred % 2 === 0) {
      setmass(mass + 5);
    } else if (counterHundred > 0 && counterHundred % 2 === 1) {
      setmass(mass - 5);
    }
  }

  function checkBoxsecondOne() {
    setcountersecondOne(countersecondOne + 1);

    if (countersecondOne % 2 === 0) {
      setmass(mass + 1);
    } else if (countersecondOne > 0 && countersecondOne % 2 === 1) {
      setmass(mass - 1);
    }
  }

  function checkBoxsecondTwo() {
    setcountersecondTwo(countersecondTwo + 1);

    if (countersecondTwo % 2 === 0) {
      setmass(mass + 2);
    } else if (countersecondTwo > 0 && countersecondTwo % 2 === 1) {
      setmass(mass - 2);
    }
  }

  function checkBoxsecondFive() {
    setcountersecondFive(countersecondFive + 1);

    if (countersecondFive % 2 === 0) {
      setmass(mass + 3);
    } else if (countersecondFive > 0 && countersecondFive % 2 === 1) {
      setmass(mass - 3);
    }
  }

  function checkBoxsecondTen() {
    setcountersecondTen(countersecondTen + 1);

    if (countersecondTen % 2 === 0) {
      setmass(mass + 4);
    } else if (countersecondTen > 0 && countersecondTen % 2 === 1) {
      setmass(mass - 4);
    }
  }

  function checkBoxsecondHundred() {
    setcountersecondHundred(countersecondHundred + 1);

    if (countersecondHundred % 2 === 0) {
      setmass(mass + 5);
    } else if (countersecondHundred > 0 && countersecondHundred % 2 === 1) {
      setmass(mass - 5);
    }
  }

  //functions to draw components
  //universal function to draw spring, auto calculate the coordinates
  //when rotating clockwise
  function drawSpring(angle, momentArm, ctx) {
    var initialHeight = 40;
    //var initialWidth = 12.5;
    //var finalLength;
    var deltaD;
    var yHeightRight; //this is the length of 1 section of the spring
    var yHeightLeft;
    var xLengthRight;
    var xLengthLeft;

    //compute delta d, the approximate change in extension of the entire spring
    deltaD = momentArm * Math.sin(angle);
    //console.log(deltaD);
    yHeightRight = (initialHeight - deltaD) / 4;
    yHeightLeft = (initialHeight + deltaD) / 4;

    xLengthRight = Math.sqrt(Math.pow(41.91, 2) - Math.pow(yHeightRight, 2));
    xLengthLeft = Math.sqrt(Math.pow(41.91, 2) - Math.pow(yHeightLeft, 2));

    //draw the right spring
    ctx.beginPath();
    ctx.moveTo(460, 150);
    ctx.lineTo(460 + xLengthRight, 150 - yHeightRight);
    ctx.lineTo(460, 150 - 2 * yHeightRight);
    ctx.lineTo(460 + xLengthRight, 150 - 3 * yHeightRight);
    ctx.lineTo(460, 150 - 4 * yHeightRight);
    ctx.stroke();

    //draw the left spring
    ctx.beginPath();
    ctx.moveTo(20, 150);
    ctx.lineTo(20 + xLengthLeft, 150 - yHeightLeft);
    ctx.lineTo(20, 150 - 2 * yHeightLeft);
    ctx.lineTo(20 + xLengthLeft, 150 - 3 * yHeightLeft);
    ctx.lineTo(20, 150 - 4 * yHeightLeft);
    ctx.stroke();
  }

  function drawDragBalance(ctx, mass) {
    //draw the horizontal main bar
    ctx.fillStyle = "grey";
    ctx.fillRect(10, 90, size.length, size.width);

    //draw the vertical pole
    ctx.fillStyle = "grey";
    ctx.fillRect(255, 100, 10, 150);

    //draw the blue plate side view
    ctx.fillStyle = "grey";
    ctx.fillRect(250, 250, 20, 50);

    ctx.fillStyle = "#3DBA75";
    ctx.beginPath();
    //ctx.moveTo(400,275);
    //ctx.arc( 400, 275, 150,  3.3065,2.976, true);
    //ctx.lineTo(250,250);
    ctx.ellipse(250, 275, 10, 25, 0, 0, 2 * Math.PI);
    ctx.fill();

    //pole for the weight
    ctx.beginPath();
    ctx.moveTo(480, 90);
    ctx.lineTo(480, 20);
    ctx.stroke();

    //draw the weight
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.fillRect(460, 85, 40, -(mass * 3));

    //write the mass on the weight
    ctx.fillStyle = "black";
    let massInString = mass.toString();
    ctx.font = "15px serif";
    ctx.fillText(massInString, 470, 60);
  }
  //End of dragbalance

  function drawBase(ctx) {
    //left
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(10, 150);
    ctx.lineTo(70, 150);
    ctx.moveTo(25, 150);
    ctx.lineTo(20, 160);
    ctx.moveTo(40, 150);
    ctx.lineTo(35, 160);
    ctx.moveTo(55, 150);
    ctx.lineTo(50, 160);
    ctx.stroke();

    //right
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(450, 150);
    ctx.lineTo(510, 150);
    ctx.moveTo(465, 150);
    ctx.lineTo(460, 160);
    ctx.moveTo(480, 150);
    ctx.lineTo(475, 160);
    ctx.moveTo(495, 150);
    ctx.lineTo(490, 160);
    ctx.stroke();
  }

  //function to draw arrow. But with limitations of 1px only
  function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 5; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 6),
      toy - headlen * Math.sin(angle - Math.PI / 6)
    );
    context.moveTo(tox, toy);
    context.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 6),
      toy - headlen * Math.sin(angle + Math.PI / 6)
    );
  }

  function drawVelocityProfile(ctx) {
    //draw velocity profile
    ctx.beginPath();
    //first profile from the left
    ctx.moveTo(100, 250);
    ctx.lineTo(100, 300);
    canvas_arrow(ctx, 100, 258, 130, 258);
    canvas_arrow(ctx, 100, 266, 130, 266);
    canvas_arrow(ctx, 100, 274, 130, 274);
    canvas_arrow(ctx, 100, 282, 130, 282);
    canvas_arrow(ctx, 100, 290, 130, 290);
    //second profile
    ctx.moveTo(160, 250);
    ctx.lineTo(160, 300);
    canvas_arrow(ctx, 160, 258, 180, 258);
    canvas_arrow(ctx, 160, 266, 185, 266);
    canvas_arrow(ctx, 160, 274, 185, 274);
    canvas_arrow(ctx, 160, 282, 185, 282);
    canvas_arrow(ctx, 160, 290, 180, 290);
    //third profile
    ctx.moveTo(330, 250);
    ctx.lineTo(330, 300);
    canvas_arrow(ctx, 330, 258, 370, 258);
    canvas_arrow(ctx, 330, 266, 355, 266);
    canvas_arrow(ctx, 330, 274, 345, 274);
    canvas_arrow(ctx, 330, 282, 355, 282);
    canvas_arrow(ctx, 330, 290, 370, 290);
    //fourth profile
    ctx.moveTo(400, 250);
    ctx.lineTo(400, 300);
    canvas_arrow(ctx, 400, 258, 430, 258);
    canvas_arrow(ctx, 400, 266, 425, 266);
    canvas_arrow(ctx, 400, 274, 415, 274);
    canvas_arrow(ctx, 400, 282, 425, 282);
    canvas_arrow(ctx, 400, 290, 430, 290);
    //fifth profile
    ctx.moveTo(470, 250);
    ctx.lineTo(470, 300);
    canvas_arrow(ctx, 470, 258, 500, 258);
    canvas_arrow(ctx, 470, 266, 490, 266);
    canvas_arrow(ctx, 470, 274, 490, 274);
    canvas_arrow(ctx, 470, 282, 490, 282);
    canvas_arrow(ctx, 470, 290, 500, 290);
    ctx.stroke();
  }

  //to draw the dial gauge
  function drawDialGauge(dialGaugeAngle, ctx, angle) {
    //draw square
    ctx.fillRect(395, 10, 40, 40);

    //draw circle
    ctx.beginPath();
    ctx.fillStyle = "gold";
    ctx.arc(415, 30, 15, 0, 2 * Math.PI, true);
    ctx.fill();

    //draw pointer
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(415, 30); //this is the center of the circle
    ctx.lineTo(
      415 + 20 * Math.sin(dialGaugeAngle + 0.785398),
      30 - 20 * Math.cos(dialGaugeAngle + 0.785398)
    );
    ctx.stroke();

    //draw the gauge spring
    //moment arm is 155
    //hypotenuse of spring section is 34.641
    let deltaH = 155 * Math.sin(angle);
    let totalHeightofSpring = 40 + deltaH;
    let sectionHeight = totalHeightofSpring / 4;
    let sectionLength = Math.sqrt(
      Math.pow(20.1556, 2) - Math.pow(sectionHeight, 2)
    );

    ctx.beginPath();
    ctx.moveTo(405, 50);
    ctx.lineTo(405 + sectionLength, 50 + sectionHeight);
    ctx.lineTo(405, 50 + 2 * sectionHeight);
    ctx.lineTo(405 + sectionLength, 50 + 3 * sectionHeight);
    ctx.lineTo(405, 50 + 4 * sectionHeight);
    ctx.stroke();

    //draw the scale on the gauge
    ctx.beginPath();
    ctx.moveTo(395, 10);
    ctx.lineTo(408, 23);
    ctx.moveTo(435, 10);
    ctx.lineTo(422, 23);
    ctx.moveTo(395, 50);
    ctx.lineTo(408, 37);
    ctx.moveTo(435, 50);
    ctx.lineTo(422, 37);
    ctx.stroke();
  }

  //end of components

  //functions for calculation and rotation
  function MomentandRotate(ctx) {
    let angle;
    //angle = 0.05 - (1698.84 - mass * 9.81) / 10825.2;
    angle = (-dragForce + mass * 9.81) / 760;
    setdialGaugeAngle(angle * 40);

    //rotate
    ctx.clearRect(0, 0, 525, 350);
    drawBase(ctx);
    drawDialGauge(dialGaugeAngle, ctx, angle);
    drawSpring(angle, 250, ctx);

    //rotate the canvas to the center of the balance
    ctx.translate(260, 135);
    ctx.rotate(angle);
    ctx.translate(-260, -135);
    drawDragBalance(ctx, mass);

    //reset the canvas to default
    ctx.translate(260, 135);
    ctx.rotate(-angle);
    ctx.translate(-260, -135);
  }

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

  //const handleToggle = () => setShow(!show);

  function handleToggle(questionNumber) {
    if (questionNumber === 1) {
      setShow(!show);
    } else if (questionNumber === 2) {
      setShowTwo(!showTwo);
    } else if (questionNumber === 3) {
      setShowThree(!showThree);
    }
  }

  //solution for the quiz
  function Solution(props) {
    if (props.questionNumber === 1) {
      return (
        <center>
          Reading off the dial gauge in the image above gives a mass of 6g.
        </center>
      );
    } else if (props.questionNumber === 2) {
      return (
        <center>
          Using the equation for drag, <br></br>
          <MathJax.Context>
            <MathJax.Node>C_D*rho*u^2/2*(pi*D^2)/4=m*g</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <br></br>
          Substituting the given values and solving for{" "}
          <MathJax.Context>
            <MathJax.Node>C_D</MathJax.Node>
          </MathJax.Context>
          ,<br></br>
          <br></br>
          <MathJax.Context>
            <MathJax.Node>C_D = 0.277</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <br></br>
          In the actual lab session, the airflow speed is not readily given. You
          will need to work it out from the technique in the 'Lab' section of
          this website, ie. using the manometer and pitot tube'
        </center>
      );
    } else if (props.questionNumber === 3) {
      return (
        <center>
          <MathJax.Context>
            <MathJax.Node>F_(Drag)=mg</MathJax.Node>
          </MathJax.Context>
          <br></br>
          <br></br>
          <MathJax.Context>
            <MathJax.Node>F_(Drag)=0.006*9.81=0.05886N</MathJax.Node>
          </MathJax.Context>
        </center>
      );
    }
  }

  function Answer(questionNumber) {
    if (questionNumber === 1) {
      if (math.round(answerOne) === 6) {
        return (
          <div>
            <p>Correct!</p>
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
            <p>Wrong, try again.</p>
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
          <p>
            {math.round(answerTwo, 2) === 0.28
              ? "Correct"
              : "Wrong, try again."}
          </p>
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
          <p>
            {math.round(answerThree, 3) === 0.059
              ? "Correct"
              : "Wrong, try again."}
          </p>
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
    MomentandRotate(ctx);

    if (air) {
      drawVelocityProfile(ctx);
    }
  }); //end of useEffect

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Drag balance" />
        <section className="textArea">
          Understanding the drag balance is an integral part of the lab. It is
          used to measure the drag force and how it changes with different
          shapes.
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
            {!air ? (
              <Button style={buttonStyle} onClick={onAirFlow}>
                Turn On Air Flow
              </Button>
            ) : (
              <Button style={altButtonStyle} onClick={offAirFlow}>
                Turn Off Air Flow
              </Button>
            )}
          </div>
          <div className="checkBoxContainer">
            <section>
              Try to balance the force by adding weight to the other side of the
              drag balance.
              <br></br>
              <span style={{ fontWeight: "850" }}>
                {" "}
                HEADS UP: Do take note of the initial position of the dial gauge
                pointer so that you know when it is balanced.{" "}
              </span>
            </section>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Stack style={checkboxStyle} spacing={3}>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxOne}
                  variantColor="yellow"
                >
                  1g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxTwo}
                  variantColor="yellow"
                >
                  2g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxFive}
                  variantColor="yellow"
                >
                  3g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxTen}
                  variantColor="yellow"
                >
                  4g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxHundred}
                  variantColor="yellow"
                >
                  5g
                </Checkbox>
              </Stack>
              <Stack style={checkboxStyle} spacing={3}>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxsecondOne}
                  variantColor="yellow"
                >
                  1g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxsecondTwo}
                  variantColor="yellow"
                >
                  2g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxsecondFive}
                  variantColor="yellow"
                >
                  3g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxsecondTen}
                  variantColor="yellow"
                >
                  4g
                </Checkbox>
                <Checkbox
                  borderColor="#3A3A3A"
                  onChange={checkBoxsecondHundred}
                  variantColor="yellow"
                >
                  5g
                </Checkbox>
              </Stack>
            </div>
          </div>
        </section>

        <div style={quizContainerStyle}>
          <div style={addMargin}>
            Here are some values you might need for the question below.
            <ul>
              <li>
                Disc Diameter,{" "}
                <MathJax.Context>
                  <MathJax.Node>D=5.6cm</MathJax.Node>
                </MathJax.Context>
              </li>
              <li>
                Air Density,{" "}
                <MathJax.Context>
                  <MathJax.Node>rho=1.2kgm^(-3)</MathJax.Node>
                </MathJax.Context>
              </li>
              <li>
                Air flow speed,{" "}
                <MathJax.Context>
                  <MathJax.Node>U=12ms^(-1)</MathJax.Node>
                </MathJax.Context>
              </li>
              <li>
                Gravity,{" "}
                <MathJax.Context>
                  <MathJax.Node>g=9.81ms^(-2)</MathJax.Node>
                </MathJax.Context>
              </li>
              <li>
                The distance between the mass slot and the pivot is the same as
                that between the center of the disc and the pivot.
              </li>
            </ul>
          </div>
          <ol>
            <li>
              <div style={addMargin}>
                Can you identify the right amount of mass, in g, to add in
                order to balance the drag force?
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
              <div style={addMargin}>What is the drag force?</div>
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
                What is the drag coefficient of the disc? (Compare its value
                to the one in the Theory section. What could be the reason they
                are different?)
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

        {completeDragBalanceSection === "notdone" ? (
            <ProgressButton
              progress={props.progress}
              counter={props.counter}
              toggle={turnOffDragBalanceButton}
              sectionName="dragbalance"
            />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Drag Balance" />
    </>
  );
}

const canvasPosition = {
  position: "relative",
  marginLeft: "5vw",
  top: "10vh",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
};

const checkboxStyle = {
  marginTop: "1em",
  width: "auto",
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
