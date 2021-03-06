import React, { useEffect, useContext } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../src/components/frontend/Layout";
import Home from "../src/components/frontend/sections/home/Home";
import Services from "../src/components/frontend/sections/services/Services";
import About from "../src/components/frontend/sections/about/About";
import Gallery from "../src/components/frontend/sections/gallery/Gallery";
import Schedule from "../src/components/frontend/sections/schedule/Schedule";
import Blog from "../src/components/frontend/sections/blog/Blog";
import Contact from "../src/components/frontend/sections/contact/Contact";
import Career from "../src/components/frontend/sections/career/Career";
import { useTranslation } from "next-i18next";
import { getVideos } from "../src/utils/services/galleryServices";
import { getBlogs } from "../src/utils/services/blogService";
import getSchedule from "../src/utils/services/scheduleServices";
import { getHome } from "../src/utils/services/homeService";
import Context from "../src/utils/context/Context";

const Index = (props) => {
    const { t } = useTranslation("common");
    const context = useContext(Context);

    useEffect(() => {
        window.addEventListener("load", () => {
            if (window.innerWidth > 992) {
                context.funcSetIsMobile(false);
            } else {
                context.funcSetIsMobile(true);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 992) {
                context.funcSetIsMobile(false);
            } else {
                context.funcSetIsMobile(true);
            }
        });

        return (_) => {
            window.removeEventListener("load", () => {});
            window.removeEventListener("resize", () => {});
        };
    });

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <meta property="robots" content="index, follow"></meta>
                <title>{t("template.HTML_PAGE_TITLE")}</title>
                <meta
                    name="keywords"
                    content="amerika denizyolu parsiyel ta????ma ??creti, amerika denizyolu parsiyel ta????ma navlunu, amerika konteyner navlunu, kanada denizyolu parsiyel ta????ma ??creti, kanada denizyolu parsiyel ta????ma navlunu, kanada konteyner navlunu, arabistan denizyolu parsiyel ta????ma ??creti, arabistan denizyolu parsiyel ta????ma navlunu, arabistan konteyner navlunu, fas denizyolu parsiyel ta????ma ??creti, fas denizyolu parsiyel ta????ma navlunu, fas konteyner navlunu, cezayir denizyolu parsiyel ta????ma ??creti, cezayir denizyolu parsiyel ta????ma navlunu, cezayir konteyner navlunu, libya denizyolu parsiyel ta????ma ??creti, libya denizyolu parsiyel ta????ma navlunu, libya konteyner navlunu, singapur denizyolu parsiyel ta????ma ??creti, singapur denizyolu parsiyel ta????ma navlunu, singapur konteyner navlunu, ??in denizyolu parsiyel ta????ma ??creti, ??in denizyolu parsiyel ta????ma navlunu, ??in konteyner navlunu, japonya denizyolu parsiyel ta????ma ??creti, japonya denizyolu parsiyel ta????ma navlunu, japonya konteyner navlunu, avusturalya denizyolu parsiyel ta????ma ??creti, avusturalya denizyolu parsiyel ta????ma navlunu, avusturalya konteyner navlunu, izlanda denizyolu parsiyel ta????ma ??creti, izlanda denizyolu parsiyel ta????ma navlunu, izlanda konteyner navlunu, meksika denizyolu parsiyel ta????ma ??creti, meksika denizyolu parsiyel ta????ma navlunu, meksika konteyner navlunu, ekvator denizyolu parsiyel ta????ma ??creti, ekvator denizyolu parsiyel ta????ma navlunu, ekvator konteyner navlunu, nijerya denizyolu parsiyel ta????ma ??creti, nijerya denizyolu parsiyel ta????ma navlunu, nijerya konteyner navlunu, viyetnam denizyolu parsiyel ta????ma ??creti, viyetnam denizyolu parsiyel ta????ma navlunu, viyetnam konteyner navlunu, t??rkiye denizyolu parsiyel ta????ma ??creti, t??rkiye denizyolu parsiyel ta????ma navlunu, t??rkiye konteyner navlunu, mersin denizyolu parsiyel ta????ma ??creti, mersin denizyolu parsiyel ta????ma navlunu, mersin konteyner navlunu, istanbul denizyolu parsiyel ta????ma ??creti, istanbul denizyolu parsiyel ta????ma navlunu, istanbul konteyner navlunu, ambarl?? denizyolu parsiyel ta????ma ??creti, ambarl?? denizyolu parsiyel ta????ma navlunu, ambarl?? konteyner navlunu, kumport denizyolu parsiyel ta????ma ??creti, kumport denizyolu parsiyel ta????ma navlunu, kumport konteyner navlunu, marport denizyolu parsiyel ta????ma ??creti, marport denizyolu parsiyel ta????ma navlunu, marport konteyner navlunu, marda?? denizyolu parsiyel ta????ma ??creti, marda?? denizyolu parsiyel ta????ma navlunu, marda?? konteyner navlunu, sudan denizyolu parsiyel ta????ma ??creti, sudan denizyolu parsiyel ta????ma navlunu, sudan konteyner navlunu, g??ney afrika denizyolu parsiyel ta????ma ??creti, g??ney afrika denizyolu parsiyel ta????ma navlunu, g??ney afrika konteyner navlunu, pakistan denizyolu parsiyel ta????ma ??creti, pakistan denizyolu parsiyel ta????ma navlunu, pakistan konteyner navlunu, rusya denizyolu parsiyel ta????ma ??creti, rusya denizyolu parsiyel ta????ma navlunu, rusya konteyner navlunu, ashdod denizyolu parsiyel ta????ma ??creti, ashdod denizyolu parsiyel ta????ma navlunu, ashdod konteyner navlunu, haifa denizyolu parsiyel ta????ma ??creti, haifa denizyolu parsiyel ta????ma navlunu, haifa konteyner navlunu, iskendeeriye denizyolu parsiyel ta????ma ??creti, iskendeeriye denizyolu parsiyel ta????ma navlunu, iskendeeriye konteyner navlunu, cidde denizyolu parsiyel ta????ma ??creti, cidde denizyolu parsiyel ta????ma navlunu, cidde konteyner navlunu, hamburg denizyolu parsiyel ta????ma ??creti, hamburg denizyolu parsiyel ta????ma navlunu, hamburg konteyner navlunu, almanya denizyolu parsiyel ta????ma ??creti, almanya denizyolu parsiyel ta????ma navlunu, almanya konteyner navlunu, fransa denizyolu parsiyel ta????ma ??creti, fransa denizyolu parsiyel ta????ma navlunu, fransa konteyner navlunu, ingiltere denizyolu parsiyel ta????ma ??creti, ingiltere denizyolu parsiyel ta????ma navlunu, ingiltere konteyner navlunu, italya denizyolu parsiyel ta????ma ??creti, italya denizyolu parsiyel ta????ma navlunu, italya konteyner navlunu, milano denizyolu parsiyel ta????ma ??creti, milano denizyolu parsiyel ta????ma navlunu, milano konteyner navlunu, ravenna denizyolu parsiyel ta????ma ??creti, ravenna denizyolu parsiyel ta????ma navlunu, ravenna konteyner navlunu, kazablanka denizyolu parsiyel ta????ma ??creti, kazablanka denizyolu parsiyel ta????ma navlunu, kazablanka konteyner navlunu, hong kong denizyolu parsiyel ta????ma ??creti, hong kong denizyolu parsiyel ta????ma navlunu, hong kong konteyner navlunu, ukrayna denizyolu parsiyel ta????ma ??creti, ukrayna denizyolu parsiyel ta????ma navlunu, ukrayna konteyner navlunu, kiev denizyolu parsiyel ta????ma ??creti, kiev denizyolu parsiyel ta????ma navlunu, kiev konteyner navlunu, odessa denizyolu parsiyel ta????ma ??creti, odessa denizyolu parsiyel ta????ma navlunu, odessa konteyner navlunu, g??rcistan denizyolu parsiyel ta????ma ??creti, g??rcistan denizyolu parsiyel ta????ma navlunu, g??rcistan konteyner navlunu, iran denizyolu parsiyel ta????ma ??creti, iran denizyolu parsiyel ta????ma navlunu, iran konteyner navlunu, ??rak denizyolu parsiyel ta????ma ??creti, ??rak denizyolu parsiyel ta????ma navlunu, ??rak konteyner navlunu, yemen denizyolu parsiyel ta????ma ??creti, yemen denizyolu parsiyel ta????ma navlunu, yemen konteyner navlunu, tanzanya denizyolu parsiyel ta????ma ??creti, tanzanya denizyolu parsiyel ta????ma navlunu, tanzanya konteyner navlunu, fildi??i denizyolu parsiyel ta????ma ??creti, fildi??i denizyolu parsiyel ta????ma navlunu, fildi??i konteyner navlunu, ??ili denizyolu parsiyel ta????ma ??creti, ??ili denizyolu parsiyel ta????ma navlunu, ??ili konteyner navlunu, uruguay denizyolu parsiyel ta????ma ??creti, uruguay denizyolu parsiyel ta????ma navlunu, uruguay konteyner navlunu, arjantin denizyolu parsiyel ta????ma ??creti, arjantin denizyolu parsiyel ta????ma navlunu, arjantin konteyner navlunu"
                />
                <meta
                    name="description"
                    content="Denizyolu parsiyel ta????mac??l??????n??n T??rk markas?? Midas Global Lojistik ??stanbul Ambarl?? g??mr?????? limanlar??ndan onlarca destinasyona her hafta d??zenli parsiyel hizmeti sunmaktad??r."
                />
                <meta property="og:title" content={t("template.HTML_PAGE_TITLE")} />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Denizyolu parsiyel ta????mac??l??????n??n T??rk markas?? Midas Global Lojistik ??stanbul Ambarl?? g??mr?????? limanlar??ndan onlarca destinasyona her hafta d??zenli parsiyel hizmeti sunmaktad??r."
                />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_URL}/assets/img/cansu.jpg`}
                />
                <link
                    rel="apple-touch-icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/assets/img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/assets/img/favicon.ico`}
                    type="image/x-icon"
                />
            </Head>
            <Layout>
                <Home home={props.homeData} />
                <Services />
                <About />
                <Gallery videos={props.videosData} urlQuery={props.urlQuery} />
                <Schedule schedule={props.vesselScheduleData} />
                <Blog />
                <Career />
                <Contact />
            </Layout>
        </div>
    );
};

export const getServerSideProps = async ({ locale, query }) => {
    const responseHomeData = getHome();
    const responseGalleryData = getVideos(locale);
    const responseVesselSchedule = getSchedule();

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            homeData: (await responseHomeData).data.result,
            videosData: (await responseGalleryData).data.result,
            vesselScheduleData: (await responseVesselSchedule).data.ships,
            urlQuery: query,
        },
    };
};

export default Index;
