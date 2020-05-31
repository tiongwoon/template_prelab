import React, { useState, useEffect } from "react";
import ProgressButton from "../elements/ProgressButton";
import Header from "../elements/Header";
import ImageSafety from "../elements/ImageSafety";
import Sidebar from "../elements/Sidebar";

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
        <section className="textArea">
          Example text
          <span style={{ fontWeight: "900" }}>
            {" "}
            In the following image of the lab, hover over the hotspot to learn
            more. Please note that if you are using a smartphone or a tablet
            with small screen, you will need to scroll laterally to view the
            full image.
          </span>
          <br></br>
          <br></br>
          <p>
            Alternatively, here are the key precautions specific to the lab.
          </p>
          <ul>
            <li>
              <p>
                <strong>Example</strong>{" "}
                Example text
              </p>
            </li>
          </ul>
        </section>

        <figure style={container}>
          <ImageSafety
            map={MAP}
            enterArea={enterArea}
            leaveArea={leaveArea}
          />

          {hoveredArea && (
            <span style={{ ...getTipPosition() }}>
              {hoveredArea && precautions.description[hoveredArea.name]}
            </span>
          )}
        </figure>

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
      <span style={{ fontWeight: "900", fontSize: "1.5em" }}>Title of precaution</span>{" "}
      <p>Description</p>
    </div>,

    <div>
      <span style={{ fontWeight: "900", fontSize: "1.5em" }}>
        High Speed Air
      </span>
      <p>
      Example
      </p>
    </div>,
  ],
};

const container = {
  position: "relative",
  paddingLeft: "5vw",
  top: "10vh",
  height: "auto",
  marginBottom: "10vh",
};
