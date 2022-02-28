import React from "react";
import "../styles/Style.css";
import testVideo from "../assets/video/test-video.mp4";

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video src={testVideo} />
      </div>
    </div>
  );
};

export default Video;
