import ShopImg from '../assets/thriftSTORE.png'

const Carz = () => {
    return ( 
        <div id="carz">
            <div className="carzTop carzSide">
                <div className="carzLeft">
                    <div className="carzIMG">
                        <img src={ShopImg} alt="" />
                    </div>
                </div>
                <div className="carzRight">
                    <div className="carzInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium, sunt in distinctio, repellendus quia corrupti impedit, quos incidunt officiis amet. Quis magni beatae vitae enim laborum hic, voluptatem ad dolorum aut facere alias provident qui error soluta numquam ex necessitatibus consequuntur earum illum, quisquam omnis! Fugiat molestiae voluptates aperiam.</p>
                    </div>
                </div>
            </div>
            <div className="carzBottom carzSide">
                <div className="carzLeft">
                    <div className="carzInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium, sunt in distinctio, repellendus quia corrupti impedit, quos incidunt officiis amet. Quis magni beatae vitae enim laborum hic, voluptatem ad dolorum aut facere alias provident qui error soluta numquam ex necessitatibus consequuntur earum illum, quisquam omnis! Fugiat molestiae voluptates aperiam.</p>
                    </div>
                </div>
                <div className="carzRight">
                    <div className="carzIMG">
                        <img src={ShopImg} alt="" style={{transform:'translateX(-10%)'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Carz;