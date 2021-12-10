import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import styles from "../../../../../styles/Gallery.module.scss";
import { useRouter } from "next/router";

const GalleryItem = ({ video, showVideo }) => {
    const router = useRouter();
    const { locale } = router;

    return (
        <>
            <div className={styles.videosBodyImagesOverlay} onClick={() => showVideo(video.id)}>
                <p>{locale === "tr" ? video.title_tr : video.title_en}</p>
            </div>
            <Image
                className={styles.videosBodyImages}
                src={video.thumbnail}
                alt={locale === "tr" ? video.title_tr : video.title_en}
                title={locale === "tr" ? video.title_tr : video.title_en}
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
