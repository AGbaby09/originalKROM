const ShopCard = ({imgURL, imgTITLE, imgDESC}) => {
    return ( 
        <div id="shopCard" className="shopCard">
            <img src={imgURL} alt="" />
            <div className="description">
                <h1>{imgTITLE}</h1>
                <p>{imgDESC}</p>
                <div className="button">
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
}
 
export default ShopCard;