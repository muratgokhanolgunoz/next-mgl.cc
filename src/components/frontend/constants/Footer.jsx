import React from "react";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../../../styles/Footer.module.scss";

const Footer = () => {
    let currentDate = new Date();
    const { t } = useTranslation("common");
    return (
        <div id="footer" className={style.footer}>
            <Container className={style.footerInner}>
                <Row>
                    <Col lg={6} md={6}>
                        <p>
                            &copy; {currentDate.getFullYear()}{" "}
                            {t("footer.FOOTER_TEXT")}
                        </p>
                    </Col>
                    <Col className={style.socialMediaLinks} lg={6} md={6}>
                        <ul>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/midasgloballojistik/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/midasgloballojistik/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCaq2ysv2s5Gi-B_SY6Hg_Tw"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
