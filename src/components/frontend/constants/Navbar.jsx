/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../../utils/context/Context";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import style from "../../../../styles/Navbar.module.scss";
import { useRouter } from "next/router";

const Navbarr = ({ funcSetCookie, funcGetCookie, funcNavigate }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const context = useContext(Context);

    const handleChangeLanguage = (_language) => {
        if (funcGetCookie().language !== undefined) {
            funcSetCookie(_language);
        }
    };

    return (
        <div>
            <Navbar
                id="navbar"
                className={style.navbar}
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand>
                        <a onClick={(_e) => funcNavigate(_e, "home")} style={{ cursor: "pointer" }}>
                            <Image
                                className={style.navbarLogo}
                                src="./assets/img/logo.png"
                                alt="mgl.cc"
                                fluid
                            ></Image>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={`${style.navbarInner} me-auto`}>
                            <a onClick={(_e) => funcNavigate(_e, "services")}>
                                {t("navbar.NAVBAR_ITEM_SERVICES")}
                            </a>

                            <a onClick={(_e) => funcNavigate(_e, "about")}>
                                {t("navbar.NAVBAR_ITEM_ABOUT_US")}
                            </a>

                            <a onClick={(_e) => funcNavigate(_e, "gallery")}>
                                {t("navbar.NAVBAR_ITEM_VIDEO_GALLERY")}
                            </a>

                            <a onClick={(_e) => funcNavigate(_e, "schedule")}>
                                {t("navbar.NAVBAR_ITEM_SHIP_PROGRAM")}
                            </a>

                            {context.blogsStatus ? (
                                <a onClick={(_e) => funcNavigate(_e, "blog")}>
                                    {t("navbar.NAVBAR_ITEM_ARTICLES_FROM_US")}
                                </a>
                            ) : null}

                            <a onClick={(_e) => funcNavigate(_e, "career")}>
                                {t("navbar.NAVBAR_ITEM_CAREER")}
                            </a>

                            <a onClick={(_e) => funcNavigate(_e, "contact")}>
                                {t("navbar.NAVBAR_ITEM_CONTACT")}
                            </a>
                        </Nav>
                        <Nav>
                            <div className={style.navbarPhone}>
                                <a href="tel:+902124381818">+90 (212) 438 18 18</a>
                            </div>
                        </Nav>
                        <Nav className={style.navbarInner}>
                            <div id="changeLanguage" className={style.changeLanguage}>
                                {router.locale === "en" ? (
                                    <span>
                                        <Link href="" locale="tr">
                                            <a onClick={() => handleChangeLanguage("tr")}>
                                                <Image src="/assets/img/tr.webp" /> TR
                                            </a>
                                        </Link>
                                    </span>
                                ) : (
                                    <span>
                                        <Link href="" locale="en">
                                            <a onClick={() => handleChangeLanguage("en")}>
                                                <Image src="/assets/img/en.webp" /> EN
                                            </a>
                                        </Link>
                                    </span>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

Navbarr.proptypes = {
    funcSetCookie: PropTypes.func.isRequired,
    funcGetCookie: PropTypes.func.isRequired,
    funcNavigate: PropTypes.func.isRequired,
};

export default Navbarr;
