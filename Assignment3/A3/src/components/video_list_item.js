import React from 'react';
// Old syntax: const VideoListItem = (props) => {

// What this says is that props has a property called video
// get it and create a new variable with it
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
      <li id="listbody" onClick={() => onVideoSelect(video)} className="list-group-item">
        <div id="listbody1"className="video-list media">
        <div className="media-left1">
        <label id="container">
          <input type="checkbox" checked=""/>
          <span id="checkmark"></span>
          </label>  
          </div>
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading"> {video.snippet.title} </div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;
