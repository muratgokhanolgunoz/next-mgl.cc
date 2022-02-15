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
                    content="amerika denizyolu parsiyel taşıma ücreti, amerika denizyolu parsiyel taşıma navlunu, amerika konteyner navlunu, kanada denizyolu parsiyel taşıma ücreti, kanada denizyolu parsiyel taşıma navlunu, kanada konteyner navlunu, arabistan denizyolu parsiyel taşıma ücreti, arabistan denizyolu parsiyel taşıma navlunu, arabistan konteyner navlunu, fas denizyolu parsiyel taşıma ücreti, fas denizyolu parsiyel taşıma navlunu, fas konteyner navlunu, cezayir denizyolu parsiyel taşıma ücreti, cezayir denizyolu parsiyel taşıma navlunu, cezayir konteyner navlunu, libya denizyolu parsiyel taşıma ücreti, libya denizyolu parsiyel taşıma navlunu, libya konteyner navlunu, singapur denizyolu parsiyel taşıma ücreti, singapur denizyolu parsiyel taşıma navlunu, singapur konteyner navlunu, çin denizyolu parsiyel taşıma ücreti, çin denizyolu parsiyel taşıma navlunu, çin konteyner navlunu, japonya denizyolu parsiyel taşıma ücreti, japonya denizyolu parsiyel taşıma navlunu, japonya konteyner navlunu, avusturalya denizyolu parsiyel taşıma ücreti, avusturalya denizyolu parsiyel taşıma navlunu, avusturalya konteyner navlunu, izlanda denizyolu parsiyel taşıma ücreti, izlanda denizyolu parsiyel taşıma navlunu, izlanda konteyner navlunu, meksika denizyolu parsiyel taşıma ücreti, meksika denizyolu parsiyel taşıma navlunu, meksika konteyner navlunu, ekvator denizyolu parsiyel taşıma ücreti, ekvator denizyolu parsiyel taşıma navlunu, ekvator konteyner navlunu, nijerya denizyolu parsiyel taşıma ücreti, nijerya denizyolu parsiyel taşıma navlunu, nijerya konteyner navlunu, viyetnam denizyolu parsiyel taşıma ücreti, viyetnam denizyolu parsiyel taşıma navlunu, viyetnam konteyner navlunu, türkiye denizyolu parsiyel taşıma ücreti, türkiye denizyolu parsiyel taşıma navlunu, türkiye konteyner navlunu, mersin denizyolu parsiyel taşıma ücreti, mersin denizyolu parsiyel taşıma navlunu, mersin konteyner navlunu, istanbul denizyolu parsiyel taşıma ücreti, istanbul denizyolu parsiyel taşıma navlunu, istanbul konteyner navlunu, ambarlı denizyolu parsiyel taşıma ücreti, ambarlı denizyolu parsiyel taşıma navlunu, ambarlı konteyner navlunu, kumport denizyolu parsiyel taşıma ücreti, kumport denizyolu parsiyel taşıma navlunu, kumport konteyner navlunu, marport denizyolu parsiyel taşıma ücreti, marport denizyolu parsiyel taşıma navlunu, marport konteyner navlunu, mardaş denizyolu parsiyel taşıma ücreti, mardaş denizyolu parsiyel taşıma navlunu, mardaş konteyner navlunu, sudan denizyolu parsiyel taşıma ücreti, sudan denizyolu parsiyel taşıma navlunu, sudan konteyner navlunu, güney afrika denizyolu parsiyel taşıma ücreti, güney afrika denizyolu parsiyel taşıma navlunu, güney afrika konteyner navlunu, pakistan denizyolu parsiyel taşıma ücreti, pakistan denizyolu parsiyel taşıma navlunu, pakistan konteyner navlunu, rusya denizyolu parsiyel taşıma ücreti, rusya denizyolu parsiyel taşıma navlunu, rusya konteyner navlunu, ashdod denizyolu parsiyel taşıma ücreti, ashdod denizyolu parsiyel taşıma navlunu, ashdod konteyner navlunu, haifa denizyolu parsiyel taşıma ücreti, haifa denizyolu parsiyel taşıma navlunu, haifa konteyner navlunu, iskendeeriye denizyolu parsiyel taşıma ücreti, iskendeeriye denizyolu parsiyel taşıma navlunu, iskendeeriye konteyner navlunu, cidde denizyolu parsiyel taşıma ücreti, cidde denizyolu parsiyel taşıma navlunu, cidde konteyner navlunu, hamburg denizyolu parsiyel taşıma ücreti, hamburg denizyolu parsiyel taşıma navlunu, hamburg konteyner navlunu, almanya denizyolu parsiyel taşıma ücreti, almanya denizyolu parsiyel taşıma navlunu, almanya konteyner navlunu, fransa denizyolu parsiyel taşıma ücreti, fransa denizyolu parsiyel taşıma navlunu, fransa konteyner navlunu, ingiltere denizyolu parsiyel taşıma ücreti, ingiltere denizyolu parsiyel taşıma navlunu, ingiltere konteyner navlunu, italya denizyolu parsiyel taşıma ücreti, italya denizyolu parsiyel taşıma navlunu, italya konteyner navlunu, milano denizyolu parsiyel taşıma ücreti, milano denizyolu parsiyel taşıma navlunu, milano konteyner navlunu, ravenna denizyolu parsiyel taşıma ücreti, ravenna denizyolu parsiyel taşıma navlunu, ravenna konteyner navlunu, kazablanka denizyolu parsiyel taşıma ücreti, kazablanka denizyolu parsiyel taşıma navlunu, kazablanka konteyner navlunu, hong kong denizyolu parsiyel taşıma ücreti, hong kong denizyolu parsiyel taşıma navlunu, hong kong konteyner navlunu, ukrayna denizyolu parsiyel taşıma ücreti, ukrayna denizyolu parsiyel taşıma navlunu, ukrayna konteyner navlunu, kiev denizyolu parsiyel taşıma ücreti, kiev denizyolu parsiyel taşıma navlunu, kiev konteyner navlunu, odessa denizyolu parsiyel taşıma ücreti, odessa denizyolu parsiyel taşıma navlunu, odessa konteyner navlunu, gürcistan denizyolu parsiyel taşıma ücreti, gürcistan denizyolu parsiyel taşıma navlunu, gürcistan konteyner navlunu, iran denizyolu parsiyel taşıma ücreti, iran denizyolu parsiyel taşıma navlunu, iran konteyner navlunu, ırak denizyolu parsiyel taşıma ücreti, ırak denizyolu parsiyel taşıma navlunu, ırak konteyner navlunu, yemen denizyolu parsiyel taşıma ücreti, yemen denizyolu parsiyel taşıma navlunu, yemen konteyner navlunu, tanzanya denizyolu parsiyel taşıma ücreti, tanzanya denizyolu parsiyel taşıma navlunu, tanzanya konteyner navlunu, fildişi denizyolu parsiyel taşıma ücreti, fildişi denizyolu parsiyel taşıma navlunu, fildişi konteyner navlunu, şili denizyolu parsiyel taşıma ücreti, şili denizyolu parsiyel taşıma navlunu, şili konteyner navlunu, uruguay denizyolu parsiyel taşıma ücreti, uruguay denizyolu parsiyel taşıma navlunu, uruguay konteyner navlunu, arjantin denizyolu parsiyel taşıma ücreti, arjantin denizyolu parsiyel taşıma navlunu, arjantin konteyner navlunu"
                />
                <meta
                    name="description"
                    content="Denizyolu parsiyel taşımacılığının Türk markası Midas Global Lojistik İstanbul Ambarlı gümrüğü limanlarından onlarca destinasyona her hafta düzenli parsiyel hizmeti sunmaktadır."
                />
                <meta property="og:title" content={t("template.HTML_PAGE_TITLE")} />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Denizyolu parsiyel taşımacılığının Türk markası Midas Global Lojistik İstanbul Ambarlı gümrüğü limanlarından onlarca destinasyona her hafta düzenli parsiyel hizmeti sunmaktadır."
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
