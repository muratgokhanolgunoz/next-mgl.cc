/* eslint-disable @next/next/no-img-element */
import { appWithTranslation } from "next-i18next";
import ContextWrapper from "../src/utils/context/ContextWrapper";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ContextWrapper>
                <Component {...pageProps} />
                <ToastContainer />
            </ContextWrapper>
        </>
    );
};

export default appWithTranslation(MyApp);
