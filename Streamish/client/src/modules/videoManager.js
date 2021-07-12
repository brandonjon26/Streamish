const baseUrl = '/api/video';
const commentsUrl = '/api/video/GetWithComments'

export const getAllVideos = () => {
    return fetch(commentsUrl)
        .then((res) => res.json())
};

export const getSearchResults = (search) => {
    return fetch(`${baseUrl}/search?q=${search}`)
        .then((res => res.json()))
}

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};
