import React from "react";
import "../styles/Style.css";
import testVideo from "../assets/video/test-video.mp4";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <ReactPlayer
          url={testVideo}
          controls="true"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Video;
