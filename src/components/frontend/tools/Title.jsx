import React from "react";
import PropTypes from "prop-types";

const Title = ({ textAlign, title, description, subtitle, color }) => {
    return (
        <>
            <p className={`${textAlign}`} style={{ color: "var(--color-2)" }}>
                {subtitle}
            </p>
            <h2
                className={`${textAlign} ${
                    color === 1 ? "text-primary-2" : "text-light"
                }`}
            >
                {title}
            </h2>
            <p className={`${textAlign}`} style={{ color: "var(--color-2)" }}>
                {description}
            </p>
        </>
    );
};

Title.defaultProps = {
    textAlign: "text-center",
    subtitle: "",
    title: "",
    description: "",
    color: 1,
};

Title.propTypes = {
    textAlign: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.number,
};

export default Title;
