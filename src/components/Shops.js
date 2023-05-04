import ShopCard from "./ShopCard";
import ShopImg from '../assets/thriftSTORE.png'
import Labs from '../assets/Labs.JPG'
const Shops = () => {
    return ( 
        <div id='shops'>
            <div className="shopTitle">
                <div className="text">
                    <h1>Shop From kROMcLUB</h1>
                    <p>Look no further. Your search for quality and durability ends here.</p>
                </div>
            </div>
            <div className="shopShops">
                <ShopCard 
                    imgURL={ShopImg}
                    imgTITLE='Krom Thrift' 
                    imgDESC='One of One backpacks and accessories. All items are one of one unless stated'
                ></ShopCard>
                <ShopCard 
                    imgURL={Labs} 
                    imgTITLE='Krom Labs' 
                    imgDESC='We deal in pproject managementand Basic Design and Technology'
                ></ShopCard>
                <ShopCard 
                    imgURL={ShopImg} 
                    imgTITLE='BB Burners' 
                    imgDESC='Burner Phones for sale. Sustainable, Affordale, and NationwidaDelivery'
                ></ShopCard>
            </div>
        </div>
    );
}
 
export default Shops;