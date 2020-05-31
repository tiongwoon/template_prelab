import React from "react";

function SectionCards() {
  const isMotivationDone =
    localStorage.getItem("completeMotivationSection") || "notdone";
  const isTheoryDone =
    localStorage.getItem("completeTheorySection") || "notdone";
  const isLabDone = localStorage.getItem("completeLabSection") || "notdone";
  const isSimulationDone =
    localStorage.getItem("completeSimulationSection") || "notdone";
  const isSafetyDone =
    localStorage.getItem("completeSafetySection") || "notdone";

  return (
    <div className="sectionCardBoxContainer">
      <div className="sectionCard">
        <h2 style={titleStyle}>Motivation</h2>
        <h3 style={descriptionStyle}>
        Description
        </h3>
        <a href="/motivation">
          {isMotivationDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>
      <div className="sectionCard">
        <h2 style={titleStyle}>Lab Equipments</h2>
        <h3 style={descriptionStyle}>Description</h3>
        <a href="/lab">
          {isLabDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>

      <div className="sectionCard">
        <h2 style={titleStyle}>Theory</h2>
        <h3 style={descriptionStyle}>Description</h3>
        <a href="/theory">
          {isTheoryDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>

      <div className="sectionCard">
        <h2 style={titleStyle}>Simulation</h2>
        <h3 style={descriptionStyle}>
          Description
        </h3>
        <a href="/dragbalance">
          {isSimulationDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>

      <div className="sectionCard">
        <h2 style={titleStyle}>Safety</h2>
        <h3 style={descriptionStyle}>Description</h3>
        <a href="/safety">
          {isSafetyDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>
    </div>
  );
}

const titleStyle = {
  fontWeight: "900",
  paddingBottom: "0.5em",
  lineHeight: "1.2em",
  height: "30%",
  width: "100%",
  overflow: "hidden"
};

const descriptionStyle = {
  fontWeight: "normal",
  paddingBottom: "1em",
  fontSize: "0.9em",
  height: "55%",
};

export default SectionCards;
