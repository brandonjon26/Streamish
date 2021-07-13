import React, { useEffect, useState } from "react";
import Video from './Video';
import { getSearchResults, getAllVideos } from "../modules/videoManager";
import { useParams } from "react-router-dom";

const UserVideos = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    const getVideos = () => {
        getAllVideos()
            .then(videos => setVideos(videos));
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
                    {videos.filter(video => video.userProfileId == id).map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserVideos;