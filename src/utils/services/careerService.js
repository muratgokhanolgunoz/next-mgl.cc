import axios from "axios";

export const getCareerList = async () => {
    return await axios.get(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglCareer"
    );
};

export const uploadCareer = async (_data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglCareer/add",
        _data
    );
};