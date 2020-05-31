import React, { Component } from 'react'

//Note: this component is written as a class component, while most other is written in functional component
//No particular reason so feel free to refactor

export class Header extends Component {
    render() {
        return (
            <div style={topBar}>
                <div className="headerText">
                    {this.props.name} 
                </div>
            </div>
        )
    }
}


const topBar = {
    height: "15vh",
    top: "0",
    backgroundColor: "#003B73",
    textAlign: "center",
    marginLeft:"0vw",
}

export default Header