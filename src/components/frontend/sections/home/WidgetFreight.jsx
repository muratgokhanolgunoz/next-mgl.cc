import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Modal from "../../tools/Modal";
import { Row, Col, Button, Image } from "react-bootstrap";
import styles from "../../../../../styles/HomeWidgets.module.scss";

const WidgetFreight = (_) => {
    const { t } = useTranslation("common");
    const [modalState, setModalState] = useState(false);
    const [iframeSource, setIframeSource] = useState("");

    const search = () => {
        setIframeSource(process.env.NEXT_PUBLIC_FREIGHT_IFRAME_TR_URL);
        setModalState(true);
    };

    return (
        <>
            <div className={styles.item}>
                <Row>
                    <Col lg={4} md={12} className="text-center">
                        <Image
                            src="./assets/mglUploads/home/icons/freight.webp"
                            alt=""
                            fluid
                        />
                    </Col>
                    <Col lg={8} md={12}>
                        <h4>
                            {t("home.widgets.pricing.WIDGETS_PRICING_TITLE")}
                        </h4>
                        <p>{t("home.widgets.pricing.WIDGETS_PRICING_BODY")}</p>
                        <Button
                            className="template-button template-button-primary-2 template-button-box-shadow mb-1"
                            style={{
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                            }}
                            onClick={() => search()}
                        >
                            <small>
                                {t(
                                    "home.widgets.pricing.WIDGETS_PRICING_BUTTON_TEXT"
                                )}
                            </small>
                        </Button>
                    </Col>
                </Row>
                {modalState && (
                    <Modal selector="#__modal" toogle={setModalState}>
                        <iframe
                            src={iframeSource}
                            title="Freight - Midas Global Logistic"
                        ></iframe>
                    </Modal>
                )}
            </div>
        </>
    );
};
export default WidgetFreight;
