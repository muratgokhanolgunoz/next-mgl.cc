import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../../utils/context/Context";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "../../../../styles/CookieBanner.module.scss";

const CookieBanner = ({ funcSetCookie, funcSetCookieBannerShow }) => {
    const { t } = useTranslation("common");
    const context = useContext(Context);
    const router = useRouter();

    return (
        <div>
            <div className={styles.cookieBanner}>
                <h5>{t("privacy.PRIVACY_HEADER")}</h5>
                <p>{t("privacy.PRIVACY_TEXT")}</p>
                <button
                    className={`${styles.cookieBannerButton} template-button template-button-primary-1`}
                    onClick={() => funcSetCookie(router.locale)}
                >
                    {t("privacy.PRIVACY_BUTTON")}
                </button>
                <h6 onClick={() => funcSetCookieBannerShow(false)}>
                    {t("template.buttons.TEMPLATE_CLOSE_BUTTON")}
                </h6>
            </div>
        </div>
    );
};

CookieBanner.propTypes = {
    funcSetCookie: PropTypes.func.isRequired,
    funcSetCookieBannerShow: PropTypes.func.isRequired,
};

export default CookieBanner;
