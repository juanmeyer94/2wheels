import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const LandingPage = () => {
    const [muted, setMuted] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleToggleMute = () => {
        setMuted(!muted);
    };

   
  

    return (
        <div className="relative flex items-center justify-center h-screen  overflow-hidden">
         <div
          className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
        >
          Bienvenidos a 2WHEELS QUIZ!
          <br />
         
            <Link to="/game">
              <button className='relative flex items-center justify-center overflow-hidden ml-[50%] py-2 mx-2 px-2 rounded-md mt-3 bg-red-800'>EMPEZAR</button>
            </Link>
          
        </div> 
       
        <video
          autoPlay
          loop
          muted={muted}
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          id="landingVideo"
        >
          <source
            src="https://res.cloudinary.com/dtyey9uos/video/upload/v1693229545/Two_Stroke_Action_-_Pure_Sound_NO_MUSIC_tqeaye.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-5 right-5 flex gap-2">
                <button
                    onClick={handleToggleMute}
                    className="bg-blue-500 text-white px-3 py-1 rounded z-10"
                >
                    {muted ? 'Unmute' : 'Mute'}
                </button>
                
            </div> 
      </div>
    );
};

export default LandingPage;