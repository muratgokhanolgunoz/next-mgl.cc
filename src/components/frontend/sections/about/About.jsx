import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Title from "../../tools/Title";
import styles from "../../../../../styles/About.module.scss";

export default function About() {
    const { t } = useTranslation("common");

    return (
        <div id="about" className={`${styles.about} section-padding`}>
            <Container>
                <Row>
                    <Title
                        title={t("about.header.ABOUT_SECTION_TITLE")}
                        subtitle={t("about.header.ABOUT_SECTION_SUBTITLE")}
                        description={t(
                            "about.header.ABOUT_SECTION_DESCRIPTION"
                        )}
                    />
                </Row>
                <Row>
                    <Col lg={6} md={12}>
                        <Image
                            className={(styles.aboutItem, styles.aboutImage)}
                            src="./assets/mglUploads/about/about.webp"
                            alt={
                                t("about.header.ABOUT_SECTION_TITLE") +
                                " " +
                                t("template.HTML_PAGE_TITLE")
                            }
                            title={
                                t("about.header.ABOUT_SECTION_TITLE") +
                                " " +
                                t("template.HTML_PAGE_TITLE")
                            }
                            fluid
                        ></Image>
                    </Col>
                    <Col lg={6} md={12}>
                        <p
                            className={(styles.aboutText, styles.aboutTitle)}
                            style={{ textAlign: "justify" }}
                        >
                            {t("about.body.ABOUT_SECTION_TEXT")}
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={{ offset: 4, span: 4 }}>
                        <a
                            href="./assets/mglUploads/about/midas_presentation_2021.pdf"
                            rel="nopenner noreferrer"
                            target="_blank"
                            alt=""
                            className="pin-to-center template-button template-button-primary-2 template-button-box-shadow"
                            style={{ width: "auto" }}
                        >
                            {t("about.body.ABOUT_SECTION_BUTTON_PRESENTATION")}
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
