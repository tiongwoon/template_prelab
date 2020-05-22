import React, { Component } from 'react'

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

//name={Lab} to pass in prop

const topBar = {
    height: "15vh",
    top: "0",
    backgroundColor: "#003B73",
    textAlign: "center",
    marginLeft:"0vw",
}

export default Header