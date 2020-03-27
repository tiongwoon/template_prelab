import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

export default function SafetyImageLightbox() {
    return (

        <div>
            
            <div style={imageGrid}>
                <SRLWrapper >
                    <img style={imageGrid1} src={require('../../assets/tunnel.jpg')} alt="It's a tunnel" />
                    <img style={imageGrid2} src={require('../../assets/labpic.jpeg')} alt="It's a lab" />
                    <img style={imageGrid3} src={require('../../assets/labpic.jpeg')} alt="It's a second lab" />
                </SRLWrapper>
            </div>
        </div>

    );
}

const imageGrid = {
    position: "absolute",
    left: "20vw",
    top: "30vh"
}

const imageGrid1 = {
    padding: "1em",
    width: "20vw",
    height: "50vh",
    objectFit: "contain",
    cursor: "pointer"
}

const imageGrid2 = {
    padding: "1em",
    width: "20vw",
    height: "50vh",
    objectFit: "contain",
    cursor: "pointer"
}

const imageGrid3 = {
    padding: "1em",
    width: "20vw",
    height: "50vh",
    objectFit: "contain",
    cursor: "pointer"
}

const imageStyle = {
    display: "block",
    width: "500px",
    height: "700px",
    objectFit: "contain",
    cursor: "pointer",
}

const headerStyle = {
    position: "absolute",
    left: "30%",
    top: "10vh"
}