import './App.css';
import videoURL from './assets/globe.mp4';
import Obiaa from './assets/Obiaa.MP4';
import VideoBG from './components/VideoBG';
import Navbar from './components/Navbar';
import Thrift from './components/ThriftStore/Thrift';
import Burner from './components/BB Burners/Burner';
import Labs from './components/Labs/Labs';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div id='appMain'>
        <Navbar logoIMG={Obiaa}/>
        <Switch>

          <Route exact path="/">
            <VideoBG url={videoURL}/>
          </Route>
          
          <Route path="/Burner">
            <Burner/>
          </Route>

          <Route path="/Thrift">
            <Thrift/>
          </Route>

          <Route path="/Labs">
            <Labs/>
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/SignUp">
            <Login/>
          </Route>

        </Switch>
      </div>  
    </Router>
  );
}

export default App;
