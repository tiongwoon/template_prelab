import React, { useState } from 'react'
import SectionCards from '../SectionCards'
import ProgressBar from '../elements/ProgressBar'
import Header from '../elements/Header'
import { Button, Collapse } from '@chakra-ui/core'

export default function Home(props) {
    //for show task Collapse
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <div>
            <Header name="Home" />
            <ProgressBar counter={props.counter} />
            <div style={introContainer}>
                <div className="secondaryHeader">Welcome!</div>
                <p className="textAreaFloating">This website will onboard you in preparation of the Fluid Mechanics Drag Lab.
                <br></br>
                You can keep track of your progress with this progress bar. Make sure to click 'Complete Section' at the top right corner after each section. Scroll down to the bottom of the page to view your tasks for the lab.
                </p>
            </div>
            <SectionCards />
            <Button style={{
                backgroundColor: "#FFD545", fontWeight: "900", color: "#3A3A3A", border: "none", 
                position: "absolute", top: "90vh", right: "40vw", width: "20vw", height: "8vh", cursor: "pointer", fontSize: "2em"
            }} onClick={handleToggle}>
                Show Task
      </Button>
            <Collapse isOpen={show}>
                <div style={taskContainer}>
                    <div style={taskStyle}>
                        <span style={{ fontWeight: "900", fontSize: "1.5em" }}>Your Task!</span>
                        <br></br>
                        <br></br>
                        The objective of the lab is to investigate the effects of plate size and shape as well as the air speed on the drag force.
                        <br></br>
                        <br></br>
                        Therefore, during the session, you will be splitted into groups and each group will:
                        <br></br>
                        1. Measure the drag on a different sizes of discs using the balance.
                        <br></br>
                        2. Measure one wake velocity profile with the pitot tube.
                        <br></br>
                        <br></br>
                        When comparing drag measurements, consider the drag force and drag coefficient.
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

const introContainer = {
    position: "relative",
    top: "-6vh",
    left: "12.5vw",
    maxWidth: "80vw",
    display: "inline-block",
    marginTop: "1em",
}

const taskStyle = {
    position: "relative",
    color: "#FFD545",
    width: "auto",
    textAlign: "center",
}

const taskContainer = {
    background: '#3A3A3A',
    borderRadius: "4px",
    position: "relative",
    marginLeft: "12.5vw",
    top: "60vh",
    width: "75vw",
    height: "auto",
    boxShadow: "0px 20px 35px -8px rgba(0,0,0,0.5), 0px 25px 35px -8px rgba(0,0,0,0.5)",
    marginBottom: "2em",
    padding: "1.5em",
}