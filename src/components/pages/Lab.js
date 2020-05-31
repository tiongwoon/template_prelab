import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/core";
import ImageLab from "../elements/ImageLab";
import LabQuiz from "../elements/LabQuiz";
import Header from "../elements/Header";
import ProgressButton from "../elements/ProgressButton";
import Sidebar from "../elements/Sidebar";
import Slider from "react-slick";

export default function Lab(props) {
  //for progress button state
  const [completeLabSection, setcompleteLabSection] = useState(
    localStorage.getItem("completeLabSection") || "notdone"
  );

  function turnOffLabButton() {
    setcompleteLabSection("done");
  }

  useEffect(() => {
    localStorage.setItem("completeLabSection", completeLabSection);
  }, [completeLabSection]);

  const [areaWhich, setareaWhich] = useState(""); //so the content for each area clicked will be determined by this

  //for toggling modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  function toggling(areaWhich) {
    setareaWhich(areaWhich);
    onOpen();
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    //slidesToScroll: 1,
  };

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <Button
          border="none"
          bg="#D4EFFC"
          style={{
            display: "inline-block",
            position: "relative",
            left: "550px",
            top: "0vh",
            cursor: "pointer",
            zIndex: "2",
          }}
        >
          Next
        </Button>
      ) : (
        <Button
          border="none"
          bg="#D4EFFC"
          style={{
            display: "inline-block",
            position: "relative",
            left: "350px",
            top: "647px",
            cursor: "pointer",
            zIndex: "2",
          }}
        >
          Previous
        </Button>
      );
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  return (
    <>
      <main className="bodyWrapper">
        <Header name="Lab Equipments" />
        <section className="textArea">
          <p>Example text</p>
          <span style={{ fontWeight: "900" }}>
            Click on the dots on the third image to learn more about each
            equipment and their placing in the setup. Note that if you are using
            a smartphone, you will need to scroll laterally to see the full
            image.
          </span>{" "}
        </section>

        <Slider
          {...settings}
          style={{
            position: "relative",
            left: "5vw",
            top: "5vh",
            width: "1000px",
            height: "650px",
          }}
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
        >
          {/* Simply add more of the <div></div> code blocks for more images. */}
          <div>
            <img
              className="equipmentImage"
              src={require("../assets/dragBalanceLabeled.jpg")}
              alt="Diagram showing the set up with labels"
            />
          </div>
          <div>
            <img
              className="equipmentImage"
              src={require("../assets/setupDiagram.jpg")}
              alt="Diagram showing the simplified block representation of the set up"
            />
          </div>
          <div>
            <ImageLab map={MAP} isOpen={isOpen} toggling={toggling} /> 
            {/* Here we pass in the image gallery component */}
          </div>
        </Slider>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="4px">
            <ModalHeader>{equipment.equipmentName[areaWhich.name]}</ModalHeader>
            <ModalCloseButton m={2} bg="#FFD545" border="none" />
            <ModalBody>
              <span> {equipment.equipmentImage[areaWhich.name]} </span>
              <br></br>
              {equipment.equipmentDescription[areaWhich.name]}
            </ModalBody>

            <ModalFooter>
              <Button bg="#FFD545" border="none" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <LabQuiz />

        {completeLabSection === "notdone" ? (
          <ProgressButton
            progress={props.progress}
            counter={props.counter}
            toggle={turnOffLabButton}
            sectionName="lab"
          />
        ) : (
          <div className="sectionCompletedContainer">
            <div className="sectionCompleted">
              You have completed this section.{" "}
            </div>
          </div>
        )}
      </main>
      <Sidebar counter={props.counter} name="Lab" />
    </>
  );
}

//this is the clickable area
//for the coordinates, best to find by trial and error. The full image dimension can be found in the parameters of the ImageLab component
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "circle",
      coords: [50, 550, 40],
      fillColor: "blue",
      preFillColor: "#FFD545",
    },
    {
      name: "2",
      shape: "circle",
      coords: [414, 429, 40],
      fillColor: "blue",
      preFillColor: "#FFD545",
    }
  ],
};

//This object will contain all the equipment information on display
//Duplicate and delete as desired
const equipment = {
  equipmentName: [
    "dummy because index starts from 0",
    "Pitot Tube",
    "Slope Manometer",

  ],
  equipmentImage: [
    "",
    <img
      className="equipmentImage"
      src={require("../assets/pitot.jpg")}
      alt="A pitot tube."
    />,
    <img
      className="equipmentImage"
      src={require("../assets/manometer.jpg")}
      alt="A manometer"
    />,



  ],
  equipmentDescription: [
    "Dummy as the counter starts from 0",
    "A pitot tube is used to measure flow speed. It has 2 holes on it. The front hole is placed in the airstream behind the disc to measure what's called the stagnation or total pressure. The other hole is placed before the disc and measures the static pressure. By measuring the difference between these pressures, you get the dynamic pressure, which can be used to calculate airspeed. Refer to page 90 in ME1 notes.",
    "A slope manometer, as its name suggests, is inclined and has a scale factor which is the ratio of height to displacement. Here, it measures the pressure difference in the pitot tube.",
  
    
  ],
};
