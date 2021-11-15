/* eslint-disable @next/next/no-css-tags */
/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import Slider from "react-slick";
import { withTranslation } from "next-i18next";
import Title from "../../tools/Title";
import GalleryItem from "./GalleryItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../../../../../styles/Gallery.module.scss";
import Modal from "../../tools/Modal";
import GalleryModalContent from "./GalleryModalContent";
import { showToast } from "../../../../core/functions";

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousVideoId: 0,
            currentVideoId: 0,
            nextVideoId: 0,
            modalState: false,
        };
    }

    componentDidMount() {
        const { video } = this.props.urlQuery;

        if (video !== undefined) {
            if (video > 0 && video < this.props.videos.length) {
                this.showVideo(parseInt(this.props.urlQuery.video));
            } else {
                showToast(
                    "bottom-right",
                    this.props.t("template.notification.errors.GALLERY_VIDEO_NOT_FOUND"),
                    "error"
                );
            }
        }
    }

    showVideo = (_videoId) => {
        var temp = _videoId;

        this.setState(() => ({ currentVideoId: _videoId }));
        this.setState(() => ({ nextVideoId: _videoId + 1 }));
        this.setState(() => ({ previousVideoId: _videoId - 1 }));

        if (temp + 1 >= this.props.videos.length) {
            this.setState(() => ({ nextVideoId: 0 }));
        }

        if (temp - 1 <= 0) {
            this.setState(() => ({ previousVideoId: 0 }));
        }

        this.handleModalState(true);
    };

    slickNext = () => {
        this.slider.slickNext();
    };

    slickPrevious = () => {
        this.slider.slickPrev();
    };

    handleModalState = (_state) => {
        this.setState({ modalState: _state });
    };

    render() {
        const settings = {
            className: styles.videosBodyCarousel,
            centerPadding: "10px",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 100,
            dots: false,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div id="gallery" className={`section-padding`}>
                <Container>
                    <Row>
                        <Title
                            title={this.props.t("gallery.header.GALLERY_SECTION_TITLE")}
                            subtitle={this.props.t("gallery.header.GALLERY_SECTION_SUBTITLE")}
                            description={this.props.t("gallery.header.GALLERY_SECTION_DESCRIPTION")}
                        />
                    </Row>
                    <Row className={styles.videosBody}>
                        <Slider ref={(c) => (this.slider = c)} {...settings}>
                            {this.props.videos.map((video) =>
                                // Ignoring the empty 0th index from the json file in order to set the video sequence number exactly
                                // Please see tools/videos/videos.json file
                                video.id !== 0 ? (
                                    <Col key={video.id} className={styles.videosBodyItems}>
                                        <GalleryItem video={video} showVideo={this.showVideo} />
                                    </Col>
                                ) : null
                            )}
                        </Slider>
                        <div className={`${styles.videosBodyCarouselButton} text-center`}>
                            <Button
                                className="m-2 template-button template-button-primary-1 template-button-box-shadow"
                                onClick={this.slickPrevious}
                            >
                                {this.props.t("template.buttons.TEMPLATE_PREVIOUS_BUTTON")}
                            </Button>
                            <Button
                                className="m-2 template-button template-button-primary-1 template-button-box-shadow"
                                onClick={this.slickNext}
                            >
                                {this.props.t("template.buttons.TEMPLATE_NEXT_BUTTON")}
                            </Button>
                        </div>
                    </Row>
                </Container>
                {this.state.modalState && (
                    <Modal selector="#__modal" toogle={this.handleModalState}>
                        <GalleryModalContent
                            videos={this.props.videos}
                            navigation={this.showVideo}
                            previous={this.state.previousVideoId}
                            current={this.state.currentVideoId}
                            next={this.state.nextVideoId}
                        />
                    </Modal>
                )}
            </div>
        );
    }
}
export default withTranslation("common")(Gallery);
