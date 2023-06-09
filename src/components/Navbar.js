import NavlinkTab from "./NavlinkTab";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = ({logoIMG}) => {
    return ( 
        <div id="navbar">
            <div id="navItem1">
                <div id="logoVideo">
                    <video src={logoIMG} autoPlay loop muted ></video>
                </div>
                <h2>kROMcLUB</h2>
            </div>
            <div id="navItem2">
                <span>
                    <Link to="/">HOME</Link>
                </span>
                <span>
                    <button>SHOPS <i class='bx bx-chevron-down'></i></button>
                    <NavlinkTab />
                </span>
                <span>
                    <Link to="/Fleetz">FLEETZ</Link>
                </span>
                <span>
                    <Link to="/Events">EVENTS</Link>
                </span>
                <span>
                    <Link to="/Login">LOGIN <i class='bx bx-log-in-circle' ></i></Link>
                </span>
            </div>
        </div>
    );
}
 
export default Navbar;