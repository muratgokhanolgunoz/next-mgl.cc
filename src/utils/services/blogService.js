import axios from "axios";

export const getBlogs = async (_language) => {
    return await axios.get(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglBlog/" + _language
    );
};

export const getSelectedBlog = async (_language, _id) => {
    return await axios.get(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL +
            "mglBlog/" +
            _language +
            "/" +
            _id
    );
};

export const addBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglBlog/add/" + _language,
        _data
    );
};

export const deleteBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglBlog/delete/" + _language,
        _data
    );
};

export const updateBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_PUBLIC_API_URL + "mglBlog/update/" + _language,
        _data
    );
};
