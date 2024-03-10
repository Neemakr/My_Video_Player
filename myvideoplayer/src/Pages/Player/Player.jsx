import React from 'react';
import VideoPlayer from '../../Video';
import './Player.css';

function Player(){
    return(
        <div className='con'>
            <VideoPlayer 
                src={'Video1.mp4'}
            />
            <VideoPlayer 
                src={'Video2.mp4'}
            />
            <VideoPlayer 
                src={'Video3.mp4'}
            />
            <VideoPlayer 
                src={'Video4.mp4'}
            />
            <VideoPlayer 
                src={'Video5.mp4'}
            />
            <VideoPlayer 
                src={'Video6.mp4'}
            />
            <VideoPlayer 
                src={'Video7.mp4'}
            />
            <VideoPlayer 
                src={'Video8.mp4'}
            />
            <VideoPlayer 
                src={'Video9.mp4'}
            />
            <VideoPlayer 
                src={'Video10.mp4'}
            />
        </div>
    )
}

export default Player;