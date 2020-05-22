import React from 'react'

export default function VideoWrapper() {
    return (
        <div className="videoContainer">
            <div className="videoBox">
                <iframe title="Video 1 about drag" width="auto" height="250" src="https://www.youtube.com/embed/tHMPR7flpf4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
            <div className="videoBox">
                <iframe title="Video 2 about drag" width="auto" height="250" src="https://www.youtube.com/embed/9p2w5Zg52uo"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
            <div className="videoBox">
                <iframe title="Video 3 about drag" width="auto" height="250" src="https://www.youtube.com/embed/2pzDtT4BKIg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
        </div>
        
    )
}
