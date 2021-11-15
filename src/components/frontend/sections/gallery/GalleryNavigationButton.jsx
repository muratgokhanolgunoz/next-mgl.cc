import React from "react";
import PropTypes from "prop-types";

const GalleryNavigationButton = ({ text, click, parameter }) => {
    return (
        <>
            <button
                id="button-gallery-navigation"
                className="m-2 template-button template-button-primary-2 template-button-box-shadow"
                style={{ width: "100%" }}
                onClick={() => click(parameter)}
            >
                {text}
            </button>
        </>
    );
};

GalleryNavigationButton.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    parameter: PropTypes.number.isRequired,
};

export default GalleryNavigationButton;
