import React from 'react';
import ImageMapper from 'react-image-mapper';

export default function ImageLabSafety(props) {
    return (
            <ImageMapper 
                src={require("../../assets/labpic.jpeg")} 
                map={props.map} 
                imgWidth={1600} 
                width={1000}
                height={600}
                onMouseEnter={area => props.enterArea(area)}
                onMouseLeave={area => props.leaveArea(area)}
            />
    )
}

const container = {
    position: "relative",
    marginLeft: "20vw",
    top: "19.5vh",
    height: "50vh",
    marginBottom: "30vh",   
}
