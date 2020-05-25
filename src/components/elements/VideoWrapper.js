import React from "react";

export default function VideoWrapper() {
  return (
    <div className="videoContainer">
      <div className="videoBox">
        <iframe
          title="This video about the interaction of
              wind load and vortices with tall buildings. (Featuring London's
              very own The Shard)"
          width="auto"
          height="250"
          src="https://www.youtube.com/embed/tHMPR7flpf4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
      <div className="videoBox">
        <iframe
          title="A video about how a wind tunnel, which we will be using in this
              lab, is being used to test the flight of a football. Not too
              dissimilar from our lab session with the wind tunnel, only that
              you will be testing the flow around a disc."
          width="auto"
          height="250"
          src="https://www.youtube.com/embed/9p2w5Zg52uo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
      <div className="videoBox">
        <iframe
          title="A video showing Lewis Hamilton visiting the Mercedes wind tunnel and how it is being used for testing the fluid flow
              around the car."
          width="auto"
          height="250"
          src="https://www.youtube.com/embed/2pzDtT4BKIg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </div>
  );
}
