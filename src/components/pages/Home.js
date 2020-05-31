import React from "react";
import SectionCards from "../elements/SectionCards";
import Header from "../elements/Header";
import Sidebar from "../elements/Sidebar";
import MathJax from "react-mathjax2";

export default function Home(props) {

  //these 2 variables are for the mathematical notation, written in LateX
  const relation = `{D=\\phi(U_{\\infty},L,\\rho,\\mu)}`;
  const Uinfinit = `{U_{\\infty}~}`;

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Home" />

        <div style={introContainer}>
          <div className="secondaryHeader">
            ME2 Fluid Mechanics - Drag Lab Preparation
          </div>
          <article className="textAreaFloating">
            <p>
            This website will help you prepare adequately for the [Enter lab name] Lab. You can keep track of your progress with the
            progress bar at the navigation column on the left of the page. Make
            sure to click the 'Complete and Proceed' button at the bottom of
            every page to save your progress and be directed to the next
            section. You can either follow the chronological order from top to
            bottom of the sections in the navigation bar on the left or you can
            direct your own learning and choose which section you want to
            explore.
            </p><br></br>
            <p>
              The lab preparation material is broken down to 5 distinct sections
              as below, with each providing key ideas to familiarise yourself
              with before attending the lab session. Finally, information on
              your tasks in the lab and the next steps after the lab are
              detailed as below. [customise as desired]
            </p><br></br>
            <p>
              This preparation should take <strong>around [30 minutes] to complete</strong>, but
              will vary depending on how long you take to solve the quiz. As
              such, don't spend too long on getting the answer right, just make
              sure you understand the techniques as they will come in handy for
              the lab.
            </p>
          </article>
        </div>
        <SectionCards />

        <div style={taskContainer}>
          <div id="tasks" style={taskStyle}>
            <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
              Your Task!
            </span>
            <p>
              Enter text here
            </p>
          </div>
          <div style={taskStyle}>
            <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
              After the Lab - Might not need this section
            </span>
            <br></br>
            Example of writing mathematical notation{" "}
            <MathJax.Context input="tex">
              <MathJax.Node inline>D</MathJax.Node>
            </MathJax.Context>{" "}
            inline with the text.
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
            <br></br>
            <ol>
              <li>
                Example of creating a list of tasks etc
              </li>
              <br></br>
              <li>
                Example text
              </li>
              <br></br>
            </ol>
            <br></br>
          </div>
        </div>
      </main>
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
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.15)",
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
