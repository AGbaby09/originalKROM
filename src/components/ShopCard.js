const ShopCard = ({imgURL, imgTITLE, imgDESC, shopHref}) => {
    return ( 
        <div id="shopCard" className="shopCard">
            <img src={imgURL} alt="" />
            <div className="description">
                <h1>{imgTITLE}</h1>
                <p>{imgDESC}</p>
                <div className="button">
                    <a href={shopHref}>Shop Now</a>
                </div>
            </div>
        </div>
    );
}
 
export default ShopCard;