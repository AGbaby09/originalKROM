import { Link } from "react-router-dom/cjs/react-router-dom";

const NavlinkTab = () => {
    return ( 
        <div id="navlink-tab">
            <Link to="/Thrift">#thrift</Link>
            <Link to="/Burner">#burners</Link>
            <Link to="/Labs">#labs</Link>
        </div>
     );
}
 
export default NavlinkTab;