import React, { useEffect, useState } from "react";
import Video from './Video';
import { getSearchResults, getAllVideos } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    const handleInput = (e) => {
        let enteredValue = e.target.value;
        getSearchResults(enteredValue).then(videos => setVideos(videos));
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <div class="topnav">
                <input type="text" placeholder="Search.." onChange={handleInput} />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;
