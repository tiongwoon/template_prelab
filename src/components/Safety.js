import React, { useState, useEffect } from 'react';
import ProgressButton from './elements/ProgressButton'
import Header from './elements/Header';
import ImageLabSafety from './elements/ImageLabSafety';
import Sidebar from './Sidebar';



export default function Safety(props) {

    //to set up the hotspot
    const [hoveredArea, setHoveredArea] = useState(null);
    const enterArea = (area) => {
        setHoveredArea(area);
    }
    const leaveArea = (area) => {
        setHoveredArea(null);
    }


    //for the control button state
    const [completeSafetySection, setcompleteSafetySection] = useState(localStorage.getItem('completeSafetySection') || 'notdone');

    function turnOffSafetyButton() {
        setcompleteSafetySection('done');
    }

    useEffect(() => {
        localStorage.setItem('completeSafetySection', completeSafetySection)
    }, [completeSafetySection]);

    function getTipPosition() {
        console.log(hoveredArea.center);
        return { 
                top: `${hoveredArea.center[1]}px`, 
                left: `${hoveredArea.center[0]}px`, 
                position: "absolute" , 
                zIndex:"1000",
                background: "#A51900",
                width:"auto",
                height:"auto",
                padding: "10px",
                color:"#FFFFFF",
                borderRadius:"4px"
            };
    }

    return (
        <div>
            <Header name="Safety" />
            <div className="textArea">There are 2 main safety precautions which you need to be wary of during the lab.
            <br></br>
                In the following image of the lab, hover over the hotspot to learn more. 
            </div>

            <div style={container}>
                <ImageLabSafety
                    map={MAP}
                    enterArea={enterArea}
                    leaveArea={leaveArea}
                />

                {hoveredArea &&
                    <span
                        style={{ ...getTipPosition() }}>
                        {hoveredArea && precautions.description[hoveredArea.name]}
                    </span>
                }
            </div>

            <Sidebar counter={props.counter} />
            {completeSafetySection === 'notdone' ? <ProgressButton progress={props.progress} toggle={turnOffSafetyButton} name="theory" /> :
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
        { name: "1", shape: "circle", coords: [1377, 450, 70], fillColor: "#A51900", preFillColor: "#A51900" },
        { name: "2", shape: "circle", coords: [350, 800, 70], fillColor: "#A51900", preFillColor: "#A51900" },
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
    title: ["dummy", "Noise", "High Speed Air",],
    description: ["dummy",
        <div><img style={{inlineSize:"1.75em", paddingRight:"0.5em"}} src={require("../assets/shout.svg")}/><span style={{ fontWeight: "900", fontSize: "1.5em" }}>Noise</span> <br></br>DO NOT stand near the fan for extended period. <br></br><br></br> Ear protection is provided but optional.</div>,
        
        <div><img style={{inlineSize:"1.75em", paddingRight:"0.5em"}} src={require("../assets/fan.svg")}/><span style={{ fontWeight: "900", fontSize: "1.5em" }}>High Speed Air</span><br></br>This is an open section Wind Tunnel, so DO NOT walk through the fast air stream. 
            <br></br>Walk around the other way instead.
        <br></br><br></br>DO NOT release loose object into the air stream. Turn off the air stream before modifying the rig.</div>,
    ]
}

const container = {
    position: "relative",
    marginLeft: "20vw",
    top: "10vh",
    height: "50vh",
    marginBottom: "40vh",   
}