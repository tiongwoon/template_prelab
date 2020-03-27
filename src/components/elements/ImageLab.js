import React from 'react';
import ImageMapper from 'react-image-mapper';

export default function ImageLab(props) {
    return (
        <div style={container}>
            <ImageMapper 
                src={require("../../assets/labpic2.jpeg")} 
                map={props.map} 
                imgWidth={1600} 
                width={1000}
                height={600}
                onClick={area => props.toggling(area)}
            />
        </div>
    )
}

const container = {
    position: "relative",
    left: "0",
    top: "0",
    //display: "inline-block"   
}



//area => props.showModal(area)