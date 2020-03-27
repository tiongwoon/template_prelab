import React, { Component } from 'react'

export class ProgressBar extends Component {
    render() {
        return (
            <div style={container}>
                <div style={headerStyle}>Your Progress:</div>
                <div style={Bar}>
                    <div style={
                        {
                            width: (this.props.counter+1) * 10 + 'vh', // (+1)here because clicking starts counting at 0
                            height: 20,
                            backgroundColor: "#FFD545",
                            display: "inline-block",
                        }}
                    >
                    </div>
                </div >
            </div>
        )
    }
}

export default ProgressBar

const Bar = {
    //position: "relative",
    //top: "33vh",
    //left: "20vw",
    width: "60vw",
    height: "20px",
    backgroundColor: "#3A3A3A",
    display: "inline-block"
}

const headerStyle = {
    //position: "relative",
    //top: "30vh",
    //left: "20vw",
    marginBottom: "0.75em",
    fontWeight:"900",
    fontSize: "1.5em",
    color: "#3A3A3A",
    display: "inline-block",
    marginRight: "0.75em",
}

const container = {
    position: "relative",
    top: "25vh",
    left: "12.5vw",
    width: "auto",
    display: "inline"
    
}
