/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Context from "../../../utils/context/Context";
import { VscChromeClose } from "react-icons/vsc";
import styles from "../../../../styles/Modal.module.scss";

const Modal = ({ children, selector, toogle }) => {
    const [mounted, setMounted] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        // componentDidMount yerine çalışır.
        setMounted(true);
        context.funcSetModalStyleState(true);

        // componentDidCatch yerine çalışır.
        return () => {
            setMounted(false);
            context.funcSetModalStyleState(false);
        };
    }, [selector]);

    return (
        mounted &&
        createPortal(
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button onClick={() => toogle(false)}>
                        <VscChromeClose />
                    </button>
                </div>
                <div className={styles.modalBody}>{children}</div>
            </div>,
            document.querySelector(selector)
        )
    );
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    selector: PropTypes.string.isRequired,
    toogle: PropTypes.func.isRequired,
};

export default Modal;
