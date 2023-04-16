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
                <a href="/">HOME</a>
                <a href="/">SHOPS</a>
                <a href="/">EVENTS</a>
                <a href="/">CARZ</a>
                <a href="/">LOGIN</a>
            </div>
        </div>
    );
}
 
export default Navbar;