import "./style.scss"
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as knnClassifier from '@tensorflow-models/knn-classifier';
// import { Howl } from 'howler';
// import soundURL from './assets/dm.mp3'

// var sound = new Howl({
//   src: [soundURL]
// });

// sound.play();

function App() {
  return (
    <div className="main">
      <video 
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
