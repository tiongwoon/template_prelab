import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={topBar}>
                <div style={headerStyle}>
                    {this.props.name} 
                </div>
            </div>
        )
    }
}

//name={Lab} to pass in prop
export default Header

const headerStyle = {
    position: "relative",
    top: "3vh",
    fontSize: "3em", //browser default is 16, which is 1em
    fontWeight: "900",
    color: "#D4EFFC",
    display: "inline-block"
}

const topBar = {
    height: "15vh",
    top: "0",
    backgroundColor: "#003B73",
    textAlign: "center",
    marginLeft:"15vw",
}
