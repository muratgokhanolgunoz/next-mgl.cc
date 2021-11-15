import React from "react";
import { useTranslation } from "next-i18next";
import Title from "../../tools/Title";
import { Row, Col, Container } from "react-bootstrap";
import { GiCargoShip, GiTruck, GiCubeforce, GiTrophyCup } from "react-icons/gi";
import styles from "../../../../../styles/Services.module.scss";

const Services = (_) => {
    const { t } = useTranslation("common");

    return (
        <div id="services" className={`${styles.services} section-padding`}>
            <Container>
                <Row>
                    <Title
                        title={t("services.header.SERVICES_SECTION_TITLE")}
                        subtitle={t(
                            "services.header.SERVICES_SECTION_SUBTITLE"
                        )}
                        description={t(
                            "services.header.SERVICES_SECTION_DESCRIPTION"
                        )}
                    />
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.servicesItem}>
                            <div className={styles.servicesBox}>
                                <h3>
                                    {t(
                                        "services.body.first.SERVICES_SECTION_FIRST_TITLE"
                                    )}
                                </h3>
                                <GiCargoShip className={styles.servicesIcon} />
                                <p>
                                    {t(
                                        "services.body.first.SERVICES_SECTION_FIRST_BODY"
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.servicesItem}>
                            <div className={styles.servicesBox}>
                                <h3>
                                    {t(
                                        "services.body.second.SERVICES_SECTION_SECOND_TITLE"
                                    )}
                                </h3>
                                <GiCubeforce className={styles.servicesIcon} />
                                <p>
                                    {t(
                                        "services.body.second.SERVICES_SECTION_SECOND_BODY"
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.servicesItem}>
                            <div className={styles.servicesBox}>
                                <h3>
                                    {t(
                                        "services.body.third.SERVICES_SECTION_THIRD_TITLE"
                                    )}
                                </h3>
                                <GiTrophyCup className={styles.servicesIcon} />
                                <p>
                                    {t(
                                        "services.body.third.SERVICES_SECTION_THIRD_BODY"
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.servicesItem}>
                            <div className={styles.servicesBox}>
                                <h3>
                                    {t(
                                        "services.body.fourth.SERVICES_SECTION_FOURTH_TITLE"
                                    )}
                                </h3>
                                <GiTruck className={styles.servicesIcon} />
                                <p>
                                    {t(
                                        "services.body.fourth.SERVICES_SECTION_FOURTH_BODY"
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Services;
