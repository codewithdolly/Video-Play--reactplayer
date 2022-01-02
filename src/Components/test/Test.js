import React from 'react'
import ReactPlayer from 'react-player'

const Test = () => {
    return (
        <div>
             <ReactPlayer
        controls
        height="300px"
        width="400px"
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
        onDuration={() => console.log("video Reaction")}
        onPlay={() => console.log("onPlay the video")}
      />
        </div>
    )
}

export default Test
