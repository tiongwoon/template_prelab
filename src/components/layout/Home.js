import React, { useState } from "react";
import SectionCards from "../SectionCards";
import ProgressBar from "../elements/ProgressBar";
import Header from "../elements/Header";
import Sidebar from "../Sidebar";
import MathJax from "react-mathjax2";

export default function Home(props) {
  const relation = `{D=\\phi(U_{\\infty},L,\\rho,\\mu)}`;
  const Uinfinit = `{U_{\\infty}~}`;
  const L = `{L~}`;
  const rho = `{\\rho~}`;
  const mu = `{\\mu~}`;

  return (
    <>
      <div className="bodyWrapper">
        <Header name="Home" />

        <div style={introContainer}>
          <div className="secondaryHeader">Welcome!</div>
          <p className="textAreaFloating">
            This website will onboard you in preparation of the Fluid Mechanics
            Drag Lab.
            <br></br>
            You can keep track of your progress with this progress bar. Make
            sure to click 'Complete Section' at the top right corner after each
            section. Scroll down to the bottom of the page to view your tasks
            for the lab.
          </p>
        </div>
        <SectionCards />

        <div style={taskContainer}>
          <div style={taskStyle}>
            <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
              Your Task!
            </span>
            <br></br>
            <br></br>
            The objective of the lab is to investigate the effects of plate size
            and shape as well as the air speed on the drag force.
            <br></br>
            <br></br>
            Therefore, during the session, you will be splitted into groups and
            each group will:
            <br></br>
            1. Measure the drag on a different sizes of discs using the balance.
            <br></br>
            2. Measure one wake velocity profile with the pitot tube.
            <br></br>
            <br></br>
            When comparing drag measurements, consider the drag force and drag
            coefficient.
          </div>
          <div style={taskStyle}>
          <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
             Next Steps
            </span>
            <br></br>
            <br></br>
            After your drag measurements in this lab session, you are required
            to process the data through the following steps. This section also
            marks the end of this lab preparation website.
            <br></br>
            <br></br>
            Your resuts of the drag force,{" "}
            <MathJax.Context input="tex">
              <MathJax.Node inline>D</MathJax.Node>
            </MathJax.Context>{" "}
            helped established the following relationship:
            <br></br>
            <MathJax.Context input="tex">
              <MathJax.Node>{relation}</MathJax.Node>
            </MathJax.Context>
            <br></br>
            where <br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{Uinfinit}</MathJax.Node>
            </MathJax.Context>
            is the upstream flow speed,<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{L}</MathJax.Node>
            </MathJax.Context>
            is the length scale of the disc (its diameter),<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{rho}</MathJax.Node>
            </MathJax.Context>
            is the fluid density, and<br></br>
            <MathJax.Context input="tex">
              <MathJax.Node inline>{mu}</MathJax.Node>
            </MathJax.Context>
            is the fluid dynamic viscosity.<br></br>
            <br></br>
            <span style={{ fontWeight: "700", fontSize: "1.2em" }}>
             You will need to complete the following tasks before the Boundary Layer lab. 
            </span>
            <br></br>
            <ol>
              <li>
                Reduce the above equation to a simpler relationship between
                dimensionless groups of the parameters
              </li><br></br>
              <li>
                Collect all the drag measurements on a circular disc from your
                first lab session(you should have at least 4 data points). Plot
                the data on a graph, using the dimensionles parameters you have
                identified. You can either plot by hand in your lab book or use
                a computer and stick your printed graph into your book.{" "}
              </li><br></br>
              <li>
                On the same graph, using a different symbol, plot the drag
                measurement that you made on your customised shape. Further,
                find at least one measurement of another shape of your
                choice-from a source of your choice-and plot it on the graph
                with a third type of symbol.
              </li><br></br>
              <li>
                Plot the velocity profile that you measured in the previous lab
                session, using dimensionles velocity and position where L is a
                length scale of your choice, consistent with the equation above.
              </li><br></br>
              <li>
                Estimate the drag on the ircular disc (70 mm diameter, 30 Hz fan
                speed) using only velocity measurement (upstream and in the
                wake). Use a control volume approach like the submarine question
                in the Theory section. Convert your drag estimate into
                dimensionless form and compare it to the average drag
                measurement using the balance. Present your results in a table
                and work out the difference (%) between them.
              </li><br></br>
            </ol>
            <br></br>
          </div>
        </div>
      </div>
      <Sidebar counter={props.counter} name="Home" />
    </>
  );
}

const introContainer = {
  position: "relative",
  top: "0vh",
  paddingLeft: "5vw",
  maxWidth: "100%",
  display: "inline-block",
  marginTop: "5vh",
};

const taskStyle = {
  position: "relative",
  color: "#333",
  backgroundColor: "#fff",
  width: "auto",
  textAlign: "left",
  borderRadius: "4px",
  padding: "2em",
  marginTop: "1.5vh",
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.15)"
};

const taskContainer = {
//   background: "#3A3A3A",
  borderRadius: "4px",
  position: "relative",
  marginTop: "3vh",
  maxWidth: "100%",
  height: "auto",
  marginBottom: "2em",
  padding: "1em 5vw 1em 5vw",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-evenly",
};

//<ProgressBar counter={props.counter} />
