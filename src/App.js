import videoURL from './assets/globe.mp4';
import Obiaa from './assets/Obiaa.MP4';
import VideoBG from './components/VideoBG';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    // <Router>
      <div id='appMain'>
        <Navbar logoIMG={Obiaa}/>
        <VideoBG url={videoURL}/>
      </div>  
    // </Router>
  );
}

export default App;
