import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = props => {
//   return <div>{props.videos.length}</div>;
// };  - destructure this to:

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
