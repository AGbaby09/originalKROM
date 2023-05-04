import Obiaa from '../assets/Obiaa.MP4';
import TWM from '../assets/TWM.mp4';
import VideoEvG from "./VideoEvG";
const EventsGallery = () => {
    return ( 
        <div id="eventGallery">
            <div id="eventLeft">
                    <VideoEvG vidURL={TWM}></VideoEvG>
            </div>
            <div id="eventRight">
                <div id="eventRightTop">
                    <VideoEvG vidURL={Obiaa}></VideoEvG>
                </div>
                <div id="eventRightCenter">
                </div>
                <div id="eventRightBottom">
                    <VideoEvG vidURL={Obiaa}></VideoEvG>
                </div>
            </div>
        </div>
     );
}
 
export default EventsGallery;