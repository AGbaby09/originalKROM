import VideoEvG from "./VideoEvG";
const EventsGallery = () => {
    return ( 
        <div id="eventGallery">
            <div id="eventLeft">
                    <VideoEvG></VideoEvG>
            </div>
            <div id="eventRight">
                <div id="eventRightTop">
                    <VideoEvG></VideoEvG>
                </div>
                <div id="eventRightCenter">
                </div>
                <div id="eventRightBottom">
                    <VideoEvG></VideoEvG>    
                </div>
            </div>
        </div>
     );
}
 
export default EventsGallery;