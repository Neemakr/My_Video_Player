import React from "react";
import ReactPlayer from 'react-player';
//import movie from './Assets/movie.mp4';

function App() {
  return (
    <>
      <ReactPlayer 
      url={"https://www.youtube.com/watch?v=lWV6jM-2DvE&list=RDlWV6jM-2DvE&start_radio=1"} 
      controls={true} 
      width={500} 
      height={240}
      />
      {/* <ReactPlayer url={[
      {src:'movie.mp4', type: 'video/mp4'},
      {src: 'movie.ogg', type:'video/ogg'}
    ]} /> */}
    </>
  );
}

export default App;
