import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import styles from "../../../../../styles/Gallery.module.scss";

const GalleryItem = ({ video, showVideo }) => {
    return (
        <>
            <div
                className={styles.videosBodyImagesOverlay}
                onClick={() => showVideo(video.id)}
            >
                <p>{video.title}</p>
            </div>
            <Image
                className={styles.videosBodyImages}
                src={video.thumbnail}
                alt={video.title}
                title={video.title}
                fluid
                onClick={() => showVideo(video.id)}
            ></Image>
        </>
    );
};

GalleryItem.propTypes = {
    video: PropTypes.object.isRequired,
    showVideo: PropTypes.func.isRequired,
};

export default GalleryItem;
