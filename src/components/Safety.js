import React, { useState, useEffect } from "react";
import ProgressButton from "./elements/ProgressButton";
import Header from "./elements/Header";
import ImageLabSafety from "./elements/ImageLabSafety";
import Sidebar from "./Sidebar";

export default function Safety(props) {
  //to set up the hotspot
  const [hoveredArea, setHoveredArea] = useState(null);
  const enterArea = (area) => {
    setHoveredArea(area);
  };
  const leaveArea = (area) => {
    setHoveredArea(null);
  };

  //for the control button state
  const [completeSafetySection, setcompleteSafetySection] = useState(
    localStorage.getItem("completeSafetySection") || "notdone"
  );

  function turnOffSafetyButton() {
    setcompleteSafetySection("done");
  }

  useEffect(() => {
    localStorage.setItem("completeSafetySection", completeSafetySection);
  }, [completeSafetySection]);

  function getTipPosition() {
    console.log(hoveredArea.center);
    return {
      top: `${hoveredArea.center[1]}px`,
      left: `${hoveredArea.center[0]}px`,
      position: "absolute",
      zIndex: "1000",
      background: "#A51900",
      width: "auto",
      height: "auto",
      padding: "10px",
      color: "#FFFFFF",
      borderRadius: "4px",
    };
  }

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Safety" />
        <div className="textArea">
          There are 2 main safety precautions which you need to be wary of
          during the lab.
          <span style={{ fontWeight: "900" }}>
            {" "}
            In the following image of the lab, hover over the hotspot to learn
            more.{" "}Please note that if you are using a smartphone or a tablet with small screen, you will need to scroll laterally to view the full image.
          </span>
        </div>

        <div style={container}>
          <ImageLabSafety
            map={MAP}
            enterArea={enterArea}
            leaveArea={leaveArea}
          />

          {hoveredArea && (
            <span style={{ ...getTipPosition() }}>
              {hoveredArea && precautions.description[hoveredArea.name]}
            </span>
          )}
        </div>

        {completeSafetySection === "notdone" ? (
          <ProgressButton
            progress={props.progress}
            counter={props.counter}
            toggle={turnOffSafetyButton}
            sectionName="safety"
          />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Safety" />
    </>
  );
}

//this is the clickable area
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "circle",
      coords: [1377, 450, 70],
      fillColor: "#A51900",
      preFillColor: "#A51900",
    },
    {
      name: "2",
      shape: "circle",
      coords: [350, 800, 70],
      fillColor: "#A51900",
      preFillColor: "#A51900",
    },
  ],
};

//warning descriptions
const precautions = {
  title: ["dummy", "Noise", "High Speed Air"],
  description: [
    "dummy",
    <div>
      <img
        style={{ inlineSize: "1.75em", paddingRight: "0.5em" }}
        src={require("../assets/shout.svg")}
        alt=""
      />
      <span style={{ fontWeight: "900", fontSize: "1.5em" }}>Noise</span>{" "}
      <br></br>DO NOT stand near the fan for extended period. <br></br>
      <br></br> Ear protection is provided but optional.
    </div>,

    <div>
      <img
        style={{ inlineSize: "1.75em", paddingRight: "0.5em" }}
        src={require("../assets/fan.svg")}
        alt=""
      />
      <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
        High Speed Air
      </span>
      <br></br>This is an open section Wind Tunnel, so DO NOT walk through the
      fast air stream.
      <br></br>Walk around the other way instead.
      <br></br>
      <br></br>DO NOT release loose object into the air stream. Turn off the air
      stream before modifying the rig.
    </div>,
  ],
};

const container = {
  position: "relative",
  paddingLeft: "5vw",
  top: "10vh",
  height: "auto",
  marginBottom: "10vh"
};
