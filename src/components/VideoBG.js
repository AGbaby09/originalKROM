import Carz from "./Carz";
import CatalogText from "./CatalogText";
import Events from "./Events";
import Foot from "./Foot";
import Shops from './Shops';
const VideoBG = ({url}) => {
    return ( 
        <>
            <div className="catalog">
                <video src={url} autoPlay loop muted></video>
                <CatalogText/>
            </div>
            <div className="catalogy">
                <Shops></Shops>
            </div>
            <div className="cataloger">
                <Carz />
            </div>
            <div className="cataloga">
                <Events></Events>
            </div>
            <Foot/>
        </>
     );
}
 
export default VideoBG;