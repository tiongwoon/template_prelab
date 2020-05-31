import React from "react";

export default function VideoWrapper() {
  return (
    <>
    <center style={{ fontWeight: "900" }}>Choose one to watch.</center>
    <section className="videoContainer">
      {/* duplicate the code snippet below to create another video block */}
      <div className="videoBox">
        <iframe
          title="Description of the multimedia content for accessibilty"
          width="auto"
          height="250"
          src="https://www.youtube.com/embed/tHMPR7flpf4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </section>
    </>
  );
}
