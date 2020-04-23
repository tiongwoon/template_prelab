import React from 'react';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/core";
//import { Link } from 'react-router-dom';

export default function Sidebar(props) {

    //write a function to check which section and returns the classname accordingly
    function className(order) {
        if (order === 1) {
            if (props.name === "Home") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        } else if (order === 2) {
            if (props.name === "Motivation") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        } else if (order === 3) {
            if (props.name === "Theory") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        } else if (order === 4){
            if (props.name === "Lab") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        } else if (order === 5) {
            if (props.name === "Drag Balance") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        } else if (order === 6) {
            if (props.name === "Safety") {
                return (
                    "hoverBuddy active"
                )
            }
            else {
                return (
                    "hoverBuddy"
                )
            }
        }
    }

    return (
        <div style={sidebarStyle}>
            <img src={require("../assets/logo_white.png")} alt="logo" style={logoStyle} />
            <nav>
                <ul>
                    <a href="/"><li className={className(1)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/home-run.svg")} />Home</li></a>
                    <a href="/motivation"><li className={className(2)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/youtube.svg")} />Motivation</li></a>
                    <a href="/theory"><li className={className(3)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/book.svg")} />Theory</li></a>
                    <a href="/lab"><li className={className(4)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/lab.svg")} />The Lab</li></a>
                    <a href="/dragbalance"><li className={className(5)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/libra.svg")} />Drag Balance</li></a>
                    <a href="/safety"><li className={className(6)}><img style={{ inlineSize: "1.6em", paddingRight: "0.8em", }} src={require("../assets/warning.svg")} />Safety</li></a>
                </ul>
            </nav>
            <center style={{ marginTop: "1.5em" }}>
                <CircularProgress size="8vw" thickness={0.1} color="teal" value={(props.counter / 5) * 100}>
                    <CircularProgressLabel color="white" fontSize="17px">Your Progress</CircularProgressLabel>
                </CircularProgress>
            </center>
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
    width: "auto",
    height: "4em",
    color: "white",
    textDecoration: "none",

}

const logoStyle = {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    width: "15vw",
    padding: "0.5em"
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



