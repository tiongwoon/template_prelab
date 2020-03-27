import React, { useState } from 'react';
import ProgressButton from './elements/ProgressButton'
import Header from './elements/Header';
import ImageLabSafety from './elements/ImageLabSafety';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
} from "@chakra-ui/core";
import Sidebar from './Sidebar';



export default function Safety(props) {

    //to control the popover externally
    const [isOpen, setisOpen] = useState(false);
    const [areaWhich, setareaWhich] = useState(''); //this will tell which description to load at the popover
    const open = (area) => {
        setisOpen(!isOpen);
        setareaWhich(area);
    }
    const close = () => setisOpen(false);

    //for the control button state
    const [completeSafetySection, setcompleteSafetySection] = useState(localStorage.getItem('completeSafetySection') || true);

    function turnOffSafetyButton() {
        setcompleteSafetySection(false);
        localStorage.setItem('completeSafetySection', completeSafetySection)
    }



    return (
        <div>
            <Header name="Safety" />
            <div className="textArea">There are 2 main safety precaution which you need to be wary of when in the lab. 
            <br></br>
                In the following image of the lab, click on the green areas to find out the precaution associated with that particular area in the lab.
            </div>
            <Popover
                isOpen={isOpen}
                onClose={close}
                placement="down"
            >
                <PopoverTrigger>
                    <Button style={showSolutionButtonStyle}> Precaution</Button>
                </PopoverTrigger>
                <PopoverContent backgroundColor="#FF6666" zIndex={4}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={{fontWeight:"900", fontSize:"1.5em"}}>{precautions.title[areaWhich.name]}</PopoverHeader>
                    <PopoverBody>{precautions.description[areaWhich.name]}</PopoverBody>
                </PopoverContent>
            </Popover>
            <ImageLabSafety map={MAP} open={open} />
            <Sidebar />
            {completeSafetySection ? <ProgressButton progress={props.progress} toggle={turnOffSafetyButton} name="theory"/> : 
                <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">You have completed this section. Move on to your next section of choice</div>
                </div> }
        </div>
    )
}

//this is the clickable area
const MAP = {
    name: "my-map",
    areas: [
        { name: "1", shape: "circle", coords: [1377, 450, 50], fillColor: "#FF6666", preFillColor: "#FFD545" },
        { name: "2", shape: "circle", coords: [350, 800, 50], fillColor: "#FF6666", preFillColor: "#FFD545" },
    ]
}


const showSolutionButtonStyle = {
    backgroundColor: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    color: "#FF6666",
    marginTop: "0.1em",
    marginBottom: "0.1em",
    position: "relative",
    top: "15vh",
    right: "32vw",
    display: "inline-block",
    height: "10vh",
    width: "20vw",
    fontSize: "2em"
}

//warning descriptions
const precautions = {
    title: ["dummy", "Noise","High Speed Air", ],
    description: ["dummy", 
    <div>DO NOT stand near the fan for extended period. <br></br><br></br> Ear protection is provided but optional.</div>,
    <div>This is an open section Wind Tunnel, so DO NOT walk through the fast air stream. Walk around the other way instead. 
        <br></br><br></br>DO NOT release loose object into the air stream. Turn off the air stream before modifying the rig.</div>,
    ]
}