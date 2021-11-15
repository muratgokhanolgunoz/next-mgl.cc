/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Title from "../../tools/Title";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { BiHome, BiPhoneCall, BiEnvelope } from "react-icons/bi";
import styles from "../../../../../styles/Contact.module.scss";

const Contact = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <div id="contact" className={`${styles.contact} section-padding`}>
                <Container>
                    <Row>
                        <Title
                            title={t("contact.header.CONTACT_SECTION_TITLE")}
                            subtitle={t(
                                "contact.header.CONTACT_SECTION_SUBTITLE"
                            )}
                            description={t(
                                "contact.header.CONTACT_SECTION_DESCRIPTION"
                            )}
                        />
                    </Row>
                    <Row>
                        <Col className={styles.contactLeft} lg={8}>
                            <iframe
                                className={styles.contactIframe}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0578992644246!2d28.99093511564473!3d41.06772702371284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab657ea6a07d5%3A0x9079f26acc3cf03e!2sMidas%20Global%20Logistics%20LTD%20STI!5e0!3m2!1str!2str!4v1628061413047!5m2!1str!2str"
                            ></iframe>
                        </Col>
                        <Col className={styles.contactRight} lg={4}>
                            <div className={styles.contactInfo}>
                                <Row>
                                    <Col xs={2}>
                                        <span
                                            className={
                                                styles.contactInfoIconUpper
                                            }
                                        >
                                            <BiHome
                                                className={
                                                    styles.contactInfoIcon
                                                }
                                            />
                                        </span>
                                    </Col>
                                    <Col xs={10}>
                                        <div className={styles.contactInfoBody}>
                                            <h4>
                                                {t(
                                                    "contact.body.address_information.CONTACT_SECTION_ADDRESS_INFORMATION_TITLE"
                                                )}
                                            </h4>
                                            <p>
                                                {t(
                                                    "contact.body.address_information.CONTACT_SECTION_ADDRESS_INFORMATION_BODY"
                                                )}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.contactInfo}>
                                <Row>
                                    <Col xs={2}>
                                        <span
                                            className={
                                                styles.contactInfoIconUpper
                                            }
                                        >
                                            <BiPhoneCall
                                                className={
                                                    styles.contactInfoIcon
                                                }
                                            />
                                        </span>
                                    </Col>
                                    <Col xs={10}>
                                        <div className={styles.contactInfoBody}>
                                            <h4>
                                                <a href="tel:+902124381818">
                                                    +90 (212) 438 18 18
                                                </a>
                                            </h4>
                                            <p>
                                                {t(
                                                    "contact.body.phone_information.CONTACT_SECTION_PHONE_INFORMATION_BODY"
                                                )}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.contactInfo}>
                                <Row>
                                    <Col xs={2}>
                                        <span
                                            className={
                                                styles.contactInfoIconUpper
                                            }
                                        >
                                            <BiEnvelope
                                                className={
                                                    styles.contactInfoIcon
                                                }
                                            />
                                        </span>
                                    </Col>
                                    <Col xs={10}>
                                        <div className={styles.contactInfoBody}>
                                            <h4>
                                                <a>info[@]mgl.cc</a>
                                            </h4>
                                            <p>
                                                {t(
                                                    "contact.body.email_information.CONTACT_SECTION_EMAIL_INFORMATION_BODY"
                                                )}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Contact;
