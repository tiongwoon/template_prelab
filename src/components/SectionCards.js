import React, { useState } from 'react'



function SectionCards() {

    const isMotivationDone = localStorage.getItem('completeMotivationSection') || 'notdone';
    const isTheoryDone = localStorage.getItem('completeTheorySection') || 'notdone';
    const isLabDone = localStorage.getItem('completeLabSection')|| 'notdone';
    const isDragBalanceDone = localStorage.getItem('completeDragBalanceSection')|| 'notdone';
    const isSafetyDone = localStorage.getItem('completeSafetySection')|| 'notdone';

    return (
        <div style={cardboxStyle}>
            <div style={cardStyle}>
                <h2 style={titleStyle}>MOTIVATION</h2>
                <h3 style={descriptionStyle}>How the concepts learned are being applied in the real world</h3>
                <a href="/motivation">{isMotivationDone === 'notdone' ? <button style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>
            <div style={cardStyle}>

                <h2 style={titleStyle}>LAB</h2>
                <h3 style={descriptionStyle}>Introduction to the equipments</h3>
                <a href="/lab">{isLabDone === 'notdone' ? <button style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>THEORY</h2>
                <h3 style={descriptionStyle}>Concepts used in the lab</h3>
                <a href="/theory">{isTheoryDone === 'notdone' ? <button style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>DRAG BALANCE</h2>
                <h3 style={descriptionStyle}>A simple animation to help you understand the key workflow of the lab.</h3>
                <a href="/dragbalance">{isDragBalanceDone === 'notdone' ? <button style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
            </div>

            <div style={cardStyle}>

                <h2 style={titleStyle}>SAFETY</h2>
                <h3 style={descriptionStyle}>Precautions to take</h3>
                <a href="/safety">{isSafetyDone === 'notdone' ? <button style={buttonStyle}>Start now</button> : <button style={buttonStyle}>Do It Again</button>}</a>
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
    left: "20vw",
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
    height: "35vh"
}

const buttonStyle = {
    borderRadius: "4px",
    background: "#006EAF",
    color: '#FFFFFF',
    fontWeight:"800",
    padding: "1em",
    border: "none",
    position: "absolute",
    bottom: "0",
    marginBottom: "2em",
    marginTop:"1em",
    cursor: "pointer",
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