import ShopCard from "./ShopCard";
import ShopImg from '../assets/thriftSTORE.png'
import Labs from '../assets/Labs.JPG'
import BURNERS from '../assets/BB.jpg'
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
                    imgURL={Labs} 
                    imgTITLE='Krom Labs' 
                    imgDESC='We deal in pproject managementand Basic Design and Technology'
                    shopHref='/Labs'
                ></ShopCard>
                
                
                <ShopCard 
                    imgURL={BURNERS} 
                    imgTITLE='BB Burners' 
                    imgDESC='Burner Phones for sale. Sustainable, Affordale, and NationwidaDelivery'
                    shopHref='/Burner'
                ></ShopCard>

                <ShopCard 
                    imgURL={ShopImg}
                    imgTITLE='Krom Thrift' 
                    imgDESC='One of One backpacks and accessories. All items are one of one unless stated'
                    shopHref='/Thrift'
                ></ShopCard>
            </div>
        </div>
    );
}
 
export default Shops;