import React, { useState, useEffect } from 'react'
import VideoWrapper from './elements/VideoWrapper'
import ProgressButton from './elements/ProgressButton'
import Header from './elements/Header'
import Sidebar from './Sidebar'

export default function Motivation(props) {
    
    const [completeMotivationSection, setcompleteMotivationSection] = useState(localStorage.getItem('completeMotivationSection') || 'notdone');

    function turnOffMotivationButton() {
        setcompleteMotivationSection('done');
    }

    useEffect(() => {
        localStorage.setItem('completeMotivationSection', completeMotivationSection);
    }, [completeMotivationSection])

    return (
        <div>
            <Header name="Motivation" />
            <div className="textArea">
                <p>The lab aims to provide students the opportunity to experiment with flow over object, with a focus on drag.
                    <br></br>
                    To feed your curiosity about the topic, here are some videos curated to show you some examples of the applications and occurences of drag around us.
                    <br></br>
                </p>
                <center style={{ fontWeight: "900" }}>Choose one to watch.</center>
            </div>
            <VideoWrapper />
            <Sidebar counter={props.counter} name="Motivation"/>

            {completeMotivationSection === 'notdone'
                ? <a href="/theory"><ProgressButton progress={props.progress} toggle={turnOffMotivationButton} name="dragbalance" /> </a>
                : <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">You have completed this section.</div>
                  </div>
            }
        </div>
    )
}



