import React from "react";
import { navigate } from "@reach/router";

export default function ProgressButton(props) {

 function goTo() {

    const section = ["motivation", "theory", "lab", "simulation", "safety" ];
    const index = section.indexOf(props.sectionName);

     if (props.counter <= 3) {
         if (index >= 4) {
             navigate(`/${section[0]}`)
         } else {
             navigate(`/${section[index + 1]}`)
         }
     } else {
         navigate('/#tasks') //this will navigate user to the tasks section in home page
     }
 }
 
  function clickHandler() {
    props.progress();
    props.toggle();
    //this deletes the first element in the array and shift elements forwards
    goTo();
  }

  return (
    <div style={bottomBar}>
        <button className="completeSectionButton" onClick={clickHandler} type="button">
          Complete and Proceed
        </button>

    </div>
  );
}

const bottomBar = {
  height: "10vh",
  marginTop: "20vh",
  position: "relative",
  zIndex: "999",
};