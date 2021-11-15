import React, { useEffect } from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { BsChevronDoubleUp } from "react-icons/bs";
import styles from "../../../../styles/ScrollToTop.module.scss";

const ScrollToTop = ({ funcNavigate }) => {
    useEffect(() => {
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() <= 200) {
                    $("#button-scroll-to-top").css({ display: "none" });
                } else {
                    $("#button-scroll-to-top").css({ display: "block" });
                }
            });
        });
    }, []);

    return (
        <div id="scroll-top-top">
            <a
                id="button-scroll-to-top"
                className={styles.buttonScrollToTop}
                onClick={(e) => funcNavigate(e, "home")}
            >
                <BsChevronDoubleUp />
            </a>
        </div>
    );
};

ScrollToTop.propTypes = {
    funcNavigate: PropTypes.func.isRequired,
};

export default ScrollToTop;
