import React from 'react'

export default function VideoWrapper() {
    return (
        <div style={videoContainer}>
            <div style={videoGrid1}>
                <iframe title="Video 1 about drag" width="auto" height="250" src="https://www.youtube.com/embed/tHMPR7flpf4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
            <div style={videoGrid2}>
                <iframe title="Video 2 about drag" width="auto" height="250" src="https://www.youtube.com/embed/9p2w5Zg52uo"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
            <div style={videoGrid3}>
                <iframe title="Video 3 about drag" width="auto" height="250" src="https://www.youtube.com/embed/2pzDtT4BKIg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
        </div>
        
    )
}


const videoContainer = {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "20vh",
    width: "auto",
    height:"35vh",
    justifyContent: "start",
    position: "relative",
    left: "20vw",
    top: "10vh",
    overflowX:"hidden",
    backgroundColor: "#3A3A3A",
    borderRadius: "4px",
    boxShadow: "0px 0px 35px -8px rgba(0,0,0,0.5), 0px 25px 35px -8px rgba(0,0,0,0.5)",
}

const videoGrid1 = {
    gridColumn: "1",
    padding: "0.5em",
    fontSize: "2em"
}

const videoGrid2 = {
    gridColumn: "2",
    padding: "0.5em",
    fontSize: "2em"
}

const videoGrid3 = {
    gridColumn: "3",
    padding: "0.5em",
    fontSize: "2em"
}


