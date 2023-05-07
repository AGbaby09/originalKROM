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
                            <h3>KROM <br />FLEETZ</h3>
                            <CustomNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carzBottom carzSide">
                <div className="carzLeft">
                    <div className="carzInfo">
                        <h3 id='headT'>Life is a journey so choose your car wisely.  Buy your dream car from us.</h3>
                        <ul id="carList">
                            <li><i class='bx bx-check-double' ></i> Pickup or Delivery</li>
                            <li><i class='bx bx-check-double' ></i> Delivery within 24HRS</li>
                            <li><i class='bx bx-check-double' ></i> Payment on Delivery</li>
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