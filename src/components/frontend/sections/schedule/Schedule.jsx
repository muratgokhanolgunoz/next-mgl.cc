/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "next-i18next";
import { showToast } from "../../../../core/functions";
import Title from "../../tools/Title";
import { Container, Row, Col, Alert } from "react-bootstrap";
import styles from "../../../../../styles/Schedule.module.scss";
import ScheduleRowMobile from "./ScheduleRowMobile";

const Schedule = ({ schedule }) => {
    const { t } = useTranslation("common");

    const checkNull = (_param) => (_param !== null ? _param.toString().toUpperCase() : "-");

    const copyOfShipInformations = (_shipInfo) => {
        try {
            let copyText = "";
            let input;

            copyText +=
                t("schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_DESTINATION") +
                checkNull(_shipInfo.destination_name) +
                "\n";
            copyText +=
                t("schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_SHIP_NAME") +
                checkNull(_shipInfo.ship_name) +
                "\n";
            copyText +=
                t("schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_SHIP_VOYAGE") +
                checkNull(_shipInfo.voyage) +
                "\n";
            copyText +=
                t("schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LOAD_PLACE") +
                checkNull(_shipInfo.load_place) +
                "\n";
            copyText +=
                t(
                    "schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LOAD_ACCEPTANCE_RANGE"
                ) +
                checkNull(_shipInfo.loading_date) +
                " / " +
                checkNull(_shipInfo.cut_off_date) +
                "\n";
            copyText +=
                t(
                    "schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_ESTIMATED_SHIP_ARRIVAL"
                ) +
                checkNull(_shipInfo.eta_date) +
                "\n";
            copyText +=
                t(
                    "schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_DESTINATION_AGENCY"
                ) +
                checkNull(_shipInfo.lan_name) +
                "\n";
            copyText +=
                t("schedule.body.clipboard.body.SCHEDULE_SECTION_CLIPBOARD_TITLE_LAST_UPDATE") +
                checkNull(_shipInfo.last_updated);

            document.getElementById("clipboard-area").value = copyText;

            input = document.querySelector("#clipboard-area");
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand("copy");

            showToast(
                "bottom-right",
                t("schedule.body.clipboard.SCHEDULE_SECTION_CLIPBOARD_MESSAGE"),
                "success"
            );
        } catch (error) {
            showToast(
                "bottom-right",
                t("template.notification.errors.SCHEDULE_NULL_ALERT") + " / " + error,
                "error"
            );
        }
    };

    return (
        <div
            id="schedule"
            className={`${styles.schedule} section-padding`}
            style={{
                backgroundImage: `url("./assets/mglUploads/schedule/schedule.webp")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
                overflow: "hidden",
            }}
        >
            <Container>
                <Row>
                    <Title
                        title={t("schedule.header.SCHEDULE_SECTION_TITLE")}
                        subtitle={t("schedule.header.SCHEDULE_SECTION_SUBTITLE")}
                        description={t("schedule.header.SCHEDULE_SECTION_DESCRIPTION")}
                        color={2}
                    />
                </Row>
                <Row>
                    <textarea
                        id="clipboard-area"
                        className={styles.clipboardArea}
                        type="hidden"
                        readOnly={true}
                    />
                    {schedule.length
                        ? schedule.map((schedule, index) => (
                              <Col key={index} lg="4">
                                  <ScheduleRowMobile
                                      rowIndex={index}
                                      scheduleRowItem={schedule}
                                      funcCopyOfShipInformations={copyOfShipInformations}
                                  />
                              </Col>
                          ))
                        : null}
                </Row>
            </Container>
        </div>
    );
};
export default Schedule;
