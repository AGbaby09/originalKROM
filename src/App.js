import videoURL from './assets/globe.mp4';
import Obiaa from './assets/Obiaa.MP4';
import VideoBG from './components/VideoBG';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id='appMain'>
        <Navbar logoIMG={Obiaa}/>
        <Switch>
          <Route exact path='/'>
            <VideoBG url={videoURL}/>
          </Route>
          <Route path='/Thrift'>
            
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
