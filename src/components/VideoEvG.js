const VideoEvG = ({vidURL}) => {
    return ( 
        <div id="eventGalleryVideo">
            <video src={vidURL} autoPlay muted loop></video>
        </div>
    );
}
 
export default VideoEvG;