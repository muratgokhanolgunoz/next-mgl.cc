import axios from "axios";

export const getVideos = async (_language) => {
    return await axios.get(process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglGetVideos/" + _language);
};
