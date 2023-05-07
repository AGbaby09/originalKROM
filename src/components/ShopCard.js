import { Link } from "react-router-dom/cjs/react-router-dom";

const ShopCard = ({imgURL, imgTITLE, imgDESC, shopHref}) => {
    return ( 
        <div id="shopCard" className="shopCard">
            <img src={imgURL} alt="" />
            <div className="description">
                <h1>{imgTITLE}</h1>
                <p>{imgDESC}</p>
                <div className="button">
                    <Link to={shopHref}>Shop Now</Link>
                </div>
            </div>
        </div>
    );
}
 
export default ShopCard;