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
                alt="The lab set up with clickable spots to inform of the precaution needed at that location."
            />
    )
}