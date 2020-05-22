import React, { useState, useEffect } from "react";
import VideoWrapper from "./elements/VideoWrapper";
import ProgressButton from "./elements/ProgressButton";
import Header from "./elements/Header";
import Sidebar from "./Sidebar";

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
      <div className="bodyWrapper">
        <Header name="Motivation" />
        <div className="textArea">
          <p>
            The lab aims to provide students the opportunity to experiment with
            flow over object, with a focus on drag.
            <br></br>
            To feed your curiosity about the topic, here are some videos curated
            to show you some examples of the applications and occurences of drag
            around us.
            <br></br>
          </p>
          <br></br>
          <span style={{ fontSize: "1.2em", fontWeight: "900" }}>
            Brief Descriptions
          </span>
          <ol>
            <li>
              This video offers interesting insights into the interaction of
              wind load and vortices with tall buildings. (Featuring London's
              very own The Shard)
            </li>
            <li>
              Take a look at how a wind tunnel, which we will be using in this
              lab, is being used to test the flight of a football. Not too
              dissimilar from our lab session with the wind tunnel, only that
              you will be testing the flow around a disc.
            </li>
            <li>
              Watch as Lewis Hamilton visits the Mercedes wind tunnel and catch
              a glimpse of how it is being used for testing the fluid flow
              around the car.
            </li>
          </ol>
          <br></br>
          <center style={{ fontWeight: "900" }}>Choose one to watch.</center>
        </div>
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
      </div>
      <Sidebar counter={props.counter} name="Motivation" />
    </>
  );
}