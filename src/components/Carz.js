import Stripped from '../assets/striped.jpg'
import Inner from '../assets/inner.jpg'

const Carz = () => {
    return ( 
        <div id="carz">
            <div className="carzTop carzSide">
                <div className="carzLeft">
                    <div className="carzIMG">
                        <img src={Inner} alt="" />
                    </div>
                </div>
                <div className="carzRight">
                    <div className="carzInfo">
                        <div id="info-bridge"></div>
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
                        <img src={Stripped} alt="" style={{transform:'translateX(-10%)'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Carz;