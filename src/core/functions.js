import { toast } from "react-toastify";

export const showToast = (_position, _text, _type, _duration) => {
    toast(_text, {
        position: _position,
        autoClose: _duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: _type,
    });
};

export const validateEmail = (_email) => {
    // eslint-disable-next-line no-useless-escape
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(_email);
};
