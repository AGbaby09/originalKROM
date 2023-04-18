import NavlinkTab from "./NavlinkTab";

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
                    <a href="/">HOME</a>
                </span>
                <span>
                    <a href="/">SHOPS <i class='bx bx-chevron-down'></i></a>
                    <NavlinkTab />
                </span>
                <span>
                    <a href="/">EVENTS <i class='bx bx-chevron-down'></i></a>
                    <NavlinkTab />
                </span>
                <span>
                    <a href="/">CARZ <i class='bx bx-chevron-down'></i></a>
                    <NavlinkTab />
                </span>
                <span>
                    <a href="/">LOGIN <i class='bx bx-log-in-circle' ></i></a>
                </span>
            </div>
        </div>
    );
}
 
export default Navbar;