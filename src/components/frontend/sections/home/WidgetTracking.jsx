import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { showToast } from "../../../../core/functions";
import { VscArrowRight } from "react-icons/vsc";
import { Row, Col, Image, InputGroup, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/HomeWidgets.module.scss";
import Modal from "../../tools/Modal";

const WidgetTracking = (_) => {
    const { t, i18n } = useTranslation("common");
    const [reservationNumber, setReservationNumber] = useState("");
    const [modalState, setModalState] = useState(false);
    const [iframeSource, setIframeSource] = useState("");

    const keyPressEnter = (_e) => {
        if (_e.keyCode === 13) {
            search();
        }
    };

    const search = () => {
        if (reservationNumber === "") {
            showToast(
                "bottom-right",
                t("home.widgets.WIDGETS_BILL_OF_LADING_NUMBER_MESSAGE"),
                "error"
            );
        } else {
            if (i18n.language === "tr")
                setIframeSource(
                    `${process.env.NEXT_PUBLIC_TRACKING_IFRAME_TR_URL}${reservationNumber}`
                );
            else
                setIframeSource(
                    `${process.env.NEXT_PUBLIC_TRACKING_IFRAME_EN_URL}${reservationNumber}`
                );
            setModalState(true);
            setReservationNumber("");
        }
    };

    return (
        <>
            <div className={styles.item}>
                <Row>
                    <Col lg={4} md={12} style={{ textAlign: "center" }}>
                        <Image
                            src="./assets/mglUploads/home/icons/tracking.webp"
                            alt=""
                            fluid
                        />
                    </Col>
                    <Col lg={8} md={12}>
                        <h4>
                            {t("home.widgets.tracking.WIDGETS_TRACKING_TITLE")}
                        </h4>
                        <p>
                            {t("home.widgets.tracking.WIDGETS_TRACKING_BODY")}
                        </p>
                        <InputGroup className="mb-2">
                            <FormControl
                                className={styles.input}
                                onKeyUp={(_e) => keyPressEnter(_e)}
                                value={reservationNumber}
                                placeholder={t(
                                    "home.widgets.tracking.WIDGETS_TRACKING_INPUT_PLACEHOLDER"
                                )}
                                maxLength={15}
                                onChange={(_e) =>
                                    setReservationNumber(_e.target.value)
                                }
                            />
                            <InputGroup.Text
                                style={{ cursor: "pointer" }}
                                onClick={() => search()}
                            >
                                <VscArrowRight />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                {modalState && (
                    <Modal selector="#__modal" toogle={setModalState}>
                        <iframe
                            src={iframeSource}
                            title="Tracking - Midas Global Logistic"
                        ></iframe>
                    </Modal>
                )}
            </div>
        </>
    );
};

export default WidgetTracking;
