import React, { useEffect, useContext, useState } from "react";
import Context from "../../utils/context/Context";
import Cookies from "universal-cookie";
import Navbar from "./constants/Navbar";
import CookieBanner from "./constants/CookieBanner";
import Footer from "./constants/Footer";
import ScrollToTop from "./constants/ScrollToTop";

const Layout = ({ children }) => {
    const context = useContext(Context);
    const cookies = new Cookies();
    const [cookieBannerShow, setCookieBannerShow] = useState(true);

    useEffect(() => {
        // Safyanın scroll pozisyonunun tek tıklama ile başa dönebilmesi için HTML DOM' a direk erişiliyor.
        if (context.modalStylesState) {
            document.querySelector("body").classList.add("overflow-hidden");
        } else {
            document.querySelector("body").classList.remove("overflow-hidden");
        }
    }, [context.modalStylesState]);

    const setCookie = (_language) => {
        // 365 günlük cookie set ediliyor.
        var maxAge = new Date(Date.now() + 24 * 60 * 60 * 1000 * 365);

        // NEXT_LOCALE cookie parametresi next.js tarafından otomatik algılanmaktadır.
        cookies.set("NEXT_LOCALE", _language, { path: "/", expires: maxAge });

        // Cookie set edildiği için CookieBanner komponenti render edilmeyecektir.
        // Kullanıcı 365 günlük süre ile sayfayı görmek istediği dil seçeneğini ayarlamış oldu ve cookie leri kabul et şeklinde yazı artık gelmeyecek.
        setCookieBannerShow(false);
    };

    const getCookie = () => {
        return {
            language: cookies.get("NEXT_LOCALE"),
        };
    };

    const navigateSection = (_e, _id) => {
        _e && _e.preventDefault();
        const elementToView = document.getElementById(_id);
        elementToView.scrollIntoView();
    };

    return (
        <div id="mgl">
            <Navbar
                funcSetCookie={setCookie}
                funcGetCookie={getCookie}
                funcNavigate={navigateSection}
            />

            {getCookie().language === undefined && cookieBannerShow ? (
                <CookieBanner
                    funcSetCookie={setCookie}
                    funcSetCookieBannerShow={setCookieBannerShow}
                />
            ) : null}

            <main>{children}</main>
            <Footer />
            <ScrollToTop funcNavigate={navigateSection} />
        </div>
    );
};
export default Layout;
