import { useEffect, useRef, useState } from "react";
import './App.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function VideoPlayer(props) {

  const myVideo = useRef(null);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const play = () => {
    myVideo.current.play();
  }

  function pause() {
    myVideo.current.pause();
  }

  useEffect(() => {
    const video = myVideo.current;

    const timeUpdateHandler = () => {
      setcurrentTime(video.currentTime);
    };

    const loadedMetaDataHandler = () =>{
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", timeUpdateHandler);
    video.addEventListener("loadedmetadata", loadedMetaDataHandler);

    return() => {
      video.removeEventListener("timeupdate", timeUpdateHandler);
      video.removeEventListener("loadedmetadata", loadedMetaDataHandler)
    };
  }, []);

  return (
    <>
    <div className="video-container">
      <video ref={myVideo} src={props.src} className="video-player">
      </video>
      <div className="controls">
        <button className="control-button" onClick={play}>
          <FaPlay />
        </button>
        <button className="control-button" onClick={pause}>
          <FaPause />
        </button>
        <div className="progress-bar-container"> 
          <div className="progress-bar">
            <div 
                className="progress-bar-fill"
                style={{ width:`${({currentTime} / {duration}) * 100}%` }}
            ></div>
            <div className="time-indicator">
              <span className="current-time">
                {currentTime.toFixed(2)}
              </span>
              <span className="Bar">
                /
              </span>
              <span className="duration">
                {duration.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ div>
    </>
  )
}

export default VideoPlayer;