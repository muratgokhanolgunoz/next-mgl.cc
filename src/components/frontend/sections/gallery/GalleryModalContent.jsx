import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import GalleryNavigationButton from "./GalleryNavigationButton";

const GalleryModalContent = ({ videos, navigation, previous, current, next }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <span
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2em",
                            }}
                        >{`${current} / ${videos.length}`}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe
                            src={videos[current - 1].src}
                            title={videos[current - 1].title}
                        ></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        {previous > 0 && (
                            <GalleryNavigationButton
                                text={t("template.buttons.TEMPLATE_PREVIOUS_BUTTON")}
                                click={navigation}
                                parameter={previous}
                            />
                        )}
                    </Col>
                    <Col xs={4}>
                        {next > 0 && (
                            <GalleryNavigationButton
                                text={t("template.buttons.TEMPLATE_NEXT_BUTTON")}
                                click={navigation}
                                parameter={next}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

GalleryModalContent.propTypes = {
    videos: PropTypes.array.isRequired,
    navigation: PropTypes.func.isRequired,
    previous: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    next: PropTypes.number.isRequired,
};

export default GalleryModalContent;
