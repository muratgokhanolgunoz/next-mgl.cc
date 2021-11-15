import axios from "axios";

export const getToken = async (_formData) => {
    return await axios.post(process.env.NEXT_PUBLIC_MIDAS_API_URL + "authenticate", _formData);
};
