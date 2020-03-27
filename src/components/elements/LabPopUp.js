import React from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

export default function LabPopUp() {
    
    function openPopupbox() {
        const content = (
            <div>
                <img src={require('../../assets/labpic.jpeg')} />
                <h1>Pitot Tube</h1>
                <p>A lot of liquid</p>
            </div>
        )
    
        PopupboxManager.open({
            content, 
            config: {
                titleBar: {
                    text: 'Updated!'
                  }
            }
        })
    }

    return (
        <div>
            <button onClick={openPopupbox} style={buttonStyle}>Click Me</button>
            <PopupboxContainer />
        </div>
    )
}

const buttonStyle={
    position: "absolute",
    left: "70vw",
    top: "40vh"
}

