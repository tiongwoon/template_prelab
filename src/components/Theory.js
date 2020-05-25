import React, { useState, useEffect } from "react";
import TheoryQuizBox from "./elements/TheoryQuizBox";
import ProgressButton from "./elements/ProgressButton";
import Header from "./elements/Header";
import Sidebar from "./Sidebar";

export default function Theory(props) {
  const [completeTheorySection, setcompleteTheorySection] = useState(
    localStorage.getItem("completeTheorySection") || "notdone"
  );

  function turnOffTheoryButton() {
    setcompleteTheorySection("done");
  }

  useEffect(() => {
    localStorage.setItem("completeTheorySection", completeTheorySection);
  }, [completeTheorySection]);

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Theory" />

        <TheoryQuizBox />

        {completeTheorySection === "notdone" ? (
          <ProgressButton
            progress={props.progress}
            toggle={turnOffTheoryButton}
            counter={props.counter}
            sectionName="theory"
          />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Theory" />
    </>
  );
}
