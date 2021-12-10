import axios from "axios";

export const userLog = async () => {
    return await axios.post(process.env.NEXT_PUBLIC_API_URL + "mglLog");
};

export const getHome = async () => {
    return await axios.get(process.env.NEXT_PUBLIC_API_URL + "mglHome");
};
