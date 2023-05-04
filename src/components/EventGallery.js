// import Obiaa from '../assets/Obiaa.MP4';
import TWM from '../assets/TWM.mp4';
import TWM1 from '../assets/TWM1.mp4';
import TWM2 from '../assets/TWM3.mp4';
import VideoEvG from "./VideoEvG";
const EventsGallery = () => {
    return ( 
        <div id="eventGallery">
            <div id="eventLeft">
                    <VideoEvG vidURL={TWM}></VideoEvG>
            </div>
            <div id="eventRight">
                <div id="eventRightTop">
                    <VideoEvG vidURL={TWM1}></VideoEvG>
                </div>
                {/* <div id="eventRightCenter">
                </div> */}
                <div id="eventRightBottom">
                    <VideoEvG vidURL={TWM2}></VideoEvG>
                </div>
            </div>
        </div>
     );
}
 
export default EventsGallery;