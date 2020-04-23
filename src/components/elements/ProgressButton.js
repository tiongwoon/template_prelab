import React, { Component } from 'react'

export class ProgressButton extends Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.props.progress();
        this.props.toggle();
        
    }

    render() {
        return (
            <div style={bottomBar}>

                <button
                    style={buttonStyle}
                    onClick={this.clickHandler}
                    type="button"
                >
                    Complete and Proceed
                </button>
            </div>
        )
    }
}

export default ProgressButton

const buttonStyle = {
    backgroundColor: "#006EAF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    margin:"2em",
    padding: "1em",
    position: "fixed",
    left: "0vw",
    bottom: "0",
    fontWeight: "900",
    display: "inline-block",
    cursor: "pointer",
    width: "10vw",
}

const bottomBar = {
    width: "15vw",
    backgroundColor: "#3A3A3A",
    height: "7em",
    padding: "1em",
    position: "fixed",
    left:"0",
    bottom: "0",
    display: "inline-block"
}