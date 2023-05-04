import Stripped from '../assets/striped.jpg'
import Inner from '../assets/inner.jpg'
import CustomNav from './CustomNav';

const Carz = () => {
    return ( 
        <div id="carz">
            <div className="carzTop carzSide">
                <div className="carzLeft">
                    <div className="carzIMG">
                        <img src={Inner} alt="" />
                    </div>
                </div>
                <div className="carzRight">
                    <div className="carzInfo">
                        <div id="info-bridge"></div>
                        <div id="info-title">
                            <h3>KROM <br />FLEETS</h3>
                            <CustomNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carzBottom carzSide">
                <div className="carzLeft">
                    <div className="carzInfo">
                        <ul>
                            <li>Pickup or Delivery</li>
                            <li>Delivery within 24HRS</li>
                            <li>Payment on Delivery</li>
                        </ul>
                    </div>
                </div>
                <div className="carzRight">
                    <div className="carzIMG">
                        <img src={Stripped} alt="" style={{transform:'translateX(-10%)'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Carz;