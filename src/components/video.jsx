import React, { Component } from "react";
import video1 from "/Rhythms of India _ Cinematic video _ 4K.mp4";
// import video2 from "../../public/Rhythms of India _ Cinematic video _ 4K.mp4 ";
// import video3 from "./video/vd3.webm";

class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} />
      </div>
    );
  }
}

export default Video;