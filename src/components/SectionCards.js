import React, { useState } from 'react'



function SectionCards() {

    const [clicked1, setclicked1] = useState(localStorage.getItem('clicked1') || false);
    const [clicked2, setclicked2] = useState(localStorage.getItem('clicked2') || false);
    const [clicked3, setclicked3] = useState(localStorage.getItem('clicked3') || false);
    const [clicked4, setclicked4] = useState(localStorage.getItem('clicked4') || false);
    const [clicked5, setclicked5] = useState(localStorage.getItem('clicked5') || false);


    function clickHandlerOne() {
        setclicked1(true);
        localStorage.setItem('clicked1', clicked1);
    }

    function clickHandlerTwo() {
        setclicked2(true);
        localStorage.setItem('clicked2', clicked2);
    }

    function clickHandlerThree() {
        setclicked3(true);
        localStorage.setItem('clicked3', clicked3);
    }

    function clickHandlerFour() {
        setclicked4(true);
        localStorage.setItem('clicked4', clicked4);
    }

    function clickHandlerFive() {
        setclicked5(true);
        localStorage.setItem('clicked4', clicked5);
    }

    return (
        <div style={cardboxStyle}>
            <div style={cardStyle}>
                <h2 style={titleStyle}>MOTIVATION</h2>
                <h3 style={descriptionStyle}>How the concepts learned are being applied in the real world</h3>
                <a href="/motivation">{!clicked1 ? <button onClick={clickHandlerOne} style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>
            <div style={cardStyle}>

                <h2 style={titleStyle}>LAB</h2>
                <h3 style={descriptionStyle}>Introduction to the equipments</h3>
                <a href="/lab">{!clicked2 ? <button onClick={clickHandlerTwo} style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>THEORY</h2>
                <h3 style={descriptionStyle}>Concepts used in the lab</h3>
                <a href="/theory">{!clicked3 ? <button onClick={clickHandlerThree} style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>DRAG BALANCE</h2>
                <h3 style={descriptionStyle}>A simple animation</h3>
                <a href="/dragbalance">{!clicked5 ? <button onClick={clickHandlerFive} style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>SAFETY</h2>
                <h3 style={descriptionStyle}>Precautions to take</h3>
                <a href="/safety">{!clicked4 ? <button onClick={clickHandlerFour} style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>
        </div>
    )
}

const cardboxStyle = {
    background: '#3A3A3A',
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    color: '#3A3A3A',
    position: "absolute",
    left: "12.5vw",
    top: "50vh",
    width: "75vw",
    height: "auto",
    boxShadow: "0px 20px 35px -8px rgba(0,0,0,0.5), 0px 25px 35px -8px rgba(0,0,0,0.5)",
}

const cardStyle = {
    borderRadius: "4px",
    padding: "1em 1em 2em 1em",
    border: "none",
    background: "white",
    margin: "0.7em",
    width: "20vw",
    height: "30vh"
}

const buttonStyle = {
    borderRadius: "4px",
    background: "#FFD545",
    color: '#3A3A3A',
    padding: "1em",
    border: "none",
    position: "absolute",
    bottom: "0",
    marginBottom: "2em",
    
}

const titleStyle = {
    fontWeight: "900",
    paddingBottom: "0.5em",
    lineHeight: "1.2em"
}

const descriptionStyle = {
    fontWeight: "100",
    paddingBottom: "1em",
    fontSize: "1em"
}


export default SectionCards;

//<img src={require('../assets/tunnel.jpg')} alt="image54" style={imageStyle} />