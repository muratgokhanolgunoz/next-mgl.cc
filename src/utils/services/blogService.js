import axios from "axios";

export const getBlogs = async (language, itemsPerPage = null, page = null) => {
    if (itemsPerPage === null && page == null) {
        return await axios.get(process.env.NEXT_PUBLIC_API_URL + "mglBlog" + "/" + language);
    } else {
        return await axios.get(
            process.env.NEXT_PUBLIC_API_URL +
                "mglBlog" +
                "/" +
                language +
                "/" +
                itemsPerPage +
                "/" +
                page
        );
    }
};

export const getSelectedBlog = async (_language, _id) => {
    return await axios.get(process.env.NEXT_PUBLIC_API_URL + "mglBlog" + "/" + "select" + "/" + _language + "/" + _id);
};

export const addBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "mglBlog" + "/" + "add" + "/" + _language,
        _data
    );
};

export const deleteBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "mglBlog" + "/" + "delete" + "/" + _language,
        _data
    );
};

export const updateBlog = async (_language, _data) => {
    return await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "mglBlog" + "/" + "update" + "/" + _language,
        _data
    );
};
