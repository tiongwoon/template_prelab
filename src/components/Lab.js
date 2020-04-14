import React, { useState, useEffect } from 'react';
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
import ImageLab from './elements/ImageLab';
import LabQuiz from './elements/LabQuiz';
import Header from './elements/Header';
import ProgressButton from './elements/ProgressButton';
import Sidebar from './Sidebar';
import Slider from "react-slick";

export default function Lab(props) {

    //for progress button state
    const [completeLabSection, setcompleteLabSection] = useState(localStorage.getItem('completeLabSection') || 'notdone');

    function turnOffLabButton() {
        setcompleteLabSection('done');
    }

    useEffect(() => {
        localStorage.setItem('completeLabSection', completeLabSection)
    }, [completeLabSection]);

    const [areaWhich, setareaWhich] = useState(''); //so the content for each area clicked will be determined by this

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
        const char = props.type === "next" ? <Button border="none" bg="#D4EFFC" style={{display:"inline-block", position:"relative", 
                                                    left:"550px", top:"0vh", cursor:"pointer",
                                                    zIndex:"2"}}>Next</Button> 
                                        : <Button border="none" bg="#D4EFFC" style={{ display:"inline-block", position:"relative", 
                                                    left:"350px", top:"647px", cursor:"pointer",
                                                    zIndex:"2", }}>Previous</Button>;
        return (
            <span className={className} onClick={props.onClick}>
                {char}
            </span>
        );
    }

    return (
        <div>
            <Header name="Lab" />
            <center className="textArea">In the lab, there are a few equipments which you will need to familarise its working principle in order to fully benefit from the lab session.
            <br></br>
             In this section, you will be introduce to the equipment, as well as answering some questions to strengthen your understanding.<br></br> Click on the areas on the map to access the information. </center>

            <Slider {...settings} style={{ position: "absolute", left: "20vw", top: "35vh", width: "1000px", height: "650px" }}
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}>
                <div>
                    <img className="equipmentImage" src={require('../assets/dragBalanceLabeled.jpg')} />
                </div>
                <div>
                    <img className="equipmentImage" src={require('../assets/setupDiagram.jpg')} />
                </div>
                <div>
                    <ImageLab map={MAP} isOpen={isOpen} toggling={toggling} />
                </div>
            </Slider>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="4px" >
                    <ModalHeader >{equipment.equipmentName[areaWhich.name]}</ModalHeader>
                    <ModalCloseButton m={2} bg="#FFD545" border="none" />
                    <ModalBody >
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
            <Sidebar />
            {completeLabSection === 'notdone' ? <ProgressButton progress={props.progress} toggle={turnOffLabButton} name="theory" /> :
                <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">You have completed this section. Move on to your next section of choice</div>
                </div>}

        </div>
    )
}

//this is the clickable area
const MAP = {
    name: "my-map",
    areas: [
        { name: "1", shape: "circle", coords: [50, 550, 40], fillColor: "blue", preFillColor: "#FFD545" },
        { name: "2", shape: "circle", coords: [414, 429, 40], fillColor: "blue", preFillColor: "#FFD545" },
        { name: "3", shape: "circle", coords: [1270, 360, 40], fillColor: "blue", preFillColor: "#FFD545" }, //dial gauge
        { name: "4", shape: "circle", coords: [1100, 400, 40], fillColor: "blue", preFillColor: "#FFD545" }, //drag balance
        { name: "5", shape: "circle", coords: [1160, 529, 40], fillColor: "blue", preFillColor: "#FFD545" }, //object
    ]
}

//This object will contain all the equipment information on display
const equipment = {
    equipmentName: ["dummy", "Pitot Tube", "Slope Manometer", "Dial Gauge And Mass", "Drag Balance", "Disc",],
    equipmentImage: ["", <img className="equipmentImage" src={require('../assets/pitot.jpg')} />, <img className="equipmentImage" src={require('../assets/manometer.jpg')} />, <img className="equipmentImage" src={require('../assets/dialGaugeAndMass.jpg')} />, <img className="equipmentImage" src={require('../assets/dragBalance.jpg')} />, <img className="equipmentImage" src={require('../assets/object.jpg')} />,],
    equipmentDescription: ["Dummy",
        "A pitot tube is used to measure flow speed. It has 2 holes on it. The front hole is placed in the airstream behind the disc to measure what's called the stagnation or total pressure. The other hole is placed before the disc and measures the static pressure. By measuring the difference between these pressures, you get the dynamic pressure, which can be used to calculate airspeed. Refer to page 90 in ME1 notes.",
        "A slope manometer, as its name suggests, is inclined and has a scale factor which is the ratio of height to displacement. Here, it measures the pressure difference in the pitot tube.",
        "The dial gauge is used as an indicator of the whether the drag balance is balanced. The mass is used to counteract the drag force generated by the wind tunnel and balance the arm. Make sure to take note of the initial position before you start putting mass onto the balance.",
        "The drag balance is used to measure the drag force. There is a simple animation for you to understand more in detail. You can find the section in the navigation bar.",
        "The disc will experience a drag force exerted by the air flow in the wind tunnel, which you will measure using the drag balance. You will investigate how different disc diameters and surface shapes, which you will build with plasticine, affect the drag force."
    ],
}

