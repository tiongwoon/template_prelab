import React from "react";

function SectionCards() {
  const isMotivationDone =
    localStorage.getItem("completeMotivationSection") || "notdone";
  const isTheoryDone =
    localStorage.getItem("completeTheorySection") || "notdone";
  const isLabDone = localStorage.getItem("completeLabSection") || "notdone";
  const isDragBalanceDone =
    localStorage.getItem("completeDragBalanceSection") || "notdone";
  const isSafetyDone =
    localStorage.getItem("completeSafetySection") || "notdone";

  return (
    <div className="sectionCardBoxContainer">
      <div className="sectionCard">
        <h2 style={titleStyle}>Motivation</h2>
        <h3 style={descriptionStyle}>
          Videos on how the analysis in the lab is applied in the industry.
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
        <h3 style={descriptionStyle}>Introduction to the equipments used during the lab.</h3>
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
        <h3 style={descriptionStyle}>Refresh some key ideas needed to understand the lab content.</h3>
        <a href="/theory">
          {isTheoryDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>

      <div className="sectionCard">
        <h2 style={titleStyle}>Drag Balance</h2>
        <h3 style={descriptionStyle}>
          A simple animation to simulate the actual workflow of the lab.
        </h3>
        <a href="/dragbalance">
          {isDragBalanceDone === "notdone" ? (
            <button className="buttonForSectionCards">Start now</button>
          ) : (
            <button className="buttonForSectionCards">Do It Again</button>
          )}
        </a>
      </div>

      <div className="sectionCard">
        <h2 style={titleStyle}>Safety</h2>
        <h3 style={descriptionStyle}>Main precautions to take during the lab.</h3>
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
