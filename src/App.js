import "./style.scss"
import React, { useEffect, useRef } from "react";
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as knnClassifier from '@tensorflow-models/knn-classifier';
// import { Howl } from 'howler';
// import soundURL from './assets/dm.mp3'

// var sound = new Howl({
//   src: [soundURL]
// });

// sound.play();

function App() {
  const video = useRef()

   //Hàm setup camera
   const init = async () => {
      await setupCamera()
   }

   const setupCamera = () => {
    return new Promise ((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia

      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: true},
          stream => {
            video.current.srcObject = stream;
            video.current.addEventListener('loadeddata', resolve)
          },
          error => reject(error)
        );
      } else {
        reject()
      }
    })
   }

   useEffect ( () => {
    init ();

    //Cleanup
    return () => {

    }
   }, [])



  return (
    <div className="main">
      <video 
      ref={video}
      className='video'
      autoPlay
      />

      <div className="control">
        <button className="btn">Train 1</button>
        <button className="btn">Train 2</button>
        <button className="btn">Run</button>
      </div>
    </div>
  );
}

export default App;
