import React, {useState} from 'react'
import VideoWrapper from './elements/VideoWrapper'
import ProgressButton from './elements/ProgressButton'
import Header from './elements/Header'
import Sidebar from './Sidebar'

export default function Motivation(props) {
    const [completeMotivationSection, setcompleteMotivationSection] = useState(localStorage.getItem('completeMotivationSection') || true);

    function turnOffMotivationButton() {

        setcompleteMotivationSection(false);

        localStorage.setItem('completeMotivationSection', completeMotivationSection)
    }
    return (
        <div>
            <Header name="Motivation" />
            
            <div className="textArea">
                <p>The lab aims to provide students the opportunity to experiment with flow over object, with a focus on drag.
                    <br></br>
                    To feed your curiosity about the topic, here are some videos curated to show you some examples of the applications and occurences of drag around us.
                    <br></br>
                    <center style={{fontWeight: "900"}}>Click on one of them to watch.</center>

                </p>
            </div>
            <VideoWrapper />
            <Sidebar />
            {completeMotivationSection ? <ProgressButton progress={props.progress} toggle={turnOffMotivationButton} name="dragbalance"/> : 
                <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">Section Completed. Proceed to your next section of choice</div>
                </div> }
        </div>
    )
}



