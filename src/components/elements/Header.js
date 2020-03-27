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
    left: "50%",
    top: "3vh",
    fontSize: "3em", //browser default is 16, which is 1em
    fontWeight: "900",
    color: "#FFD545",
    display: "inline-block"
}

const topBar = {
    width: "100%",
    height: "15vh",
    top: "0",
    backgroundColor: "#3A3A3A",
}
