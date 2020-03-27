import React from 'react';
//import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div style={sidebarStyle}>
            <img src={require("../assets/logo.jpg")} alt="logo" style={logoStyle}/>
            <nav>
                <ul>
                <a href="/"><li className="hoverBuddy">Home</li></a>
                <a href="/motivation"><li className="hoverBuddy">Motivation</li></a>
                <a href="/theory"><li  className="hoverBuddy">Theory</li></a>
                <a href="/lab"><li  className="hoverBuddy">The Lab</li></a>
                <a href="/dragbalance"><li  className="hoverBuddy">Drag Balance</li></a>
                <a href="/safety"><li  className="hoverBuddy">Safety</li></a>
                </ul>
            </nav>
        </div>
    )

    
}

const sidebarStyle = {
    background: "#333",
    position: "fixed",
    top: "0",
    left: "0",
    width: "15vw",
    height: "100vh"
}

const navStyle = {
    display: "block",
    fontSize: "1em", 
    padding: "2em",
    paddingBottom: "3em",
    width:"auto",
    height: "4em",
    color: "white",
    textDecoration: "none",
   
}    

const logoStyle = {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    width: "15vw",

}



/*<link  to=''>Motivation</link>                           
                <link  to=''>Theory</link>
                <link  to=''>The Lab</link>
                <link  to=''>Safety</link>
                
                <nav>
                <navStyle>Motivation</navStyle>
                
            </nav> 
                <div >Theory</div>
                <div >The Lab</div>
                <div >Safety</div>*/



