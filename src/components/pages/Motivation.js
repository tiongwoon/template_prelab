import React, { useState, useEffect } from "react";
import VideoWrapper from "../elements/VideoWrapper";
import ProgressButton from "../elements/ProgressButton";
import Header from "../elements/Header";
import Sidebar from "../elements/Sidebar";

export default function Motivation(props) {
  const [completeMotivationSection, setcompleteMotivationSection] = useState(
    localStorage.getItem("completeMotivationSection") || "notdone"
  );

  function turnOffMotivationButton() {
    setcompleteMotivationSection("done");
  }

  useEffect(() => {
    localStorage.setItem(
      "completeMotivationSection",
      completeMotivationSection
    );
  }, [completeMotivationSection]);

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Motivation" />
        <section className="textArea">
          <p>
          Enter text here.
          </p>
          <br></br>
          <span style={{ fontSize: "1.2em", fontWeight: "900" }}>
            Brief descriptions of the video. Recommended to provide but can be removed as desired
          </span>
          <ol>
            <li>
              Explanation 1
            </li>
            <li>
              Explanation 2
            </li>
          </ol>
          <br></br>
        </section>
        <VideoWrapper />

        {completeMotivationSection === "notdone" ? (
          <ProgressButton
            progress={props.progress}
            toggle={turnOffMotivationButton}
            counter={props.counter}
            sectionName="motivation"
          />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Motivation" />
    </>
  );
}