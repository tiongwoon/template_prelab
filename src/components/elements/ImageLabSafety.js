import React from 'react';
import ImageMapper from 'react-image-mapper';

export default function ImageLabSafety(props) {
    return (
        <div style={container}>
            <ImageMapper 
                src={require("../../assets/labpic.jpeg")} 
                map={props.map} 
                imgWidth={1600} 
                width={1000}
                height={600}
                onClick={area => props.open(area)}
            />
        </div>
    )
}

const container = {
    position: "relative",
    marginLeft: "20vw",
    top: "19.5vh",
    height: "50vh",
    marginBottom: "30vh",   
}
