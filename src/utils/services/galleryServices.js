import axios from "axios";

export const getVideos = async () => {
    return await axios.get(process.env.NEXT_PUBLIC_API_URL + "mglGallery/");
};
