/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import getSchedule from "../../../../utils/services/scheduleServices";
import { showToast } from "../../../../core/functions";
import Title from "../../tools/Title";
import ScheduleRow from "./ScheduleRow";
import { Container, Row, Table } from "react-bootstrap";
import styles from "../../../../../styles/Schedule.module.scss";

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
                t("template.notification.errors.SCHEDULE_NULL_ALERT"),
                "warning"
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
                overflow: "hidden"
            }}
        >
            <Container fluid>
                <Row>
                    <Title
                        title={t("schedule.header.SCHEDULE_SECTION_TITLE")}
                        subtitle={t("schedule.header.SCHEDULE_SECTION_SUBTITLE")}
                        description={t("schedule.header.SCHEDULE_SECTION_DESCRIPTION")}
                        color={2}
                    />
                </Row>
                <Row>
                    <textarea id="clipboard-area" className={styles.clipboardArea} type="hidden" />
                    <Table className={styles.tableSchedule} hover={true} responsive={true}>
                        <thead>
                            <tr>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DESTINATION"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_SHIP_NAME"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_ESTIMATED_TIME_OF_ARRIVAL"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DECLARATION_CLOSING"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_LOAD_PLACE"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_AGENCY"
                                        )}
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.tableScheduleRowSpan}>
                                        {t(
                                            "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_CONSOLE_CUTOFF"
                                        )}
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.length ? (
                                schedule.map((schedule, index) => (
                                    <ScheduleRow
                                        key={index}
                                        scheduleRowItem={schedule}
                                        funcCopyOfShipInformations={copyOfShipInformations}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">
                                        <p className={styles.scheduleNullMessage}>
                                            {t("schedule.body.SCHEDULE_SECTION_EMPTY_MESSAGE")}
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
};
export default Schedule;
