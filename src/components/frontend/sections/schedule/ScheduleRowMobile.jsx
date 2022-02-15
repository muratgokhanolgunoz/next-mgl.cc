import React, { useContext } from "react";
import PropTypes from "prop-types";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { GiCargoShip } from "react-icons/gi";
import { useTranslation } from "next-i18next";
import styles from "../../../../../styles/ScheduleRowMobile.module.scss";
import Context from "../../../../utils/context/Context";

const ScheduleRowMobile = ({ rowIndex, scheduleRowItem, funcCopyOfShipInformations }) => {
    const { t } = useTranslation("common");
    const context = useContext(Context);

    return (
        <div className={styles.component}>
            <div
                className={`${styles.menu} ${
                    !context.isMobile ||
                    (context.isMobile && context.vesselSchedule.mobileActiveItem === rowIndex)
                        ? styles.bgActive
                        : styles.bgInactive
                }`}
                onClick={() =>
                    context.funcSetVesselSchedule(
                        !context.isMobile ||
                            (context.isMobile &&
                                context.vesselSchedule.mobileActiveItem === rowIndex)
                            ? { mobileActiveItem: undefined }
                            : { mobileActiveItem: rowIndex }
                    )
                }
            >
                <div className={styles.title}>
                    <span>
                        <GiCargoShip size={36} /> &nbsp; {scheduleRowItem.destination_name}
                    </span>
                </div>
                <div className={styles.button}>
                    {context.vesselSchedule.mobileActiveItem === rowIndex && context.isMobile && (
                        <VscChevronUp size="32" />
                    )}

                    {context.vesselSchedule.mobileActiveItem !== rowIndex && context.isMobile && (
                        <VscChevronDown size="32" />
                    )}
                </div>
            </div>
            {!context.isMobile ||
            (context.isMobile && context.vesselSchedule.mobileActiveItem === rowIndex) ? (
                <div className={styles.collapse}>
                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t("schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_SHIP_NAME")}
                        </span>
                        <span className={styles.value}>{scheduleRowItem.ship_name}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t(
                                "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_SHIP_VOYAGE"
                            )}
                        </span>
                        <span className={styles.value}>{scheduleRowItem.voyage}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t(
                                "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_ESTIMATED_TIME_OF_ARRIVAL"
                            )}
                        </span>
                        <span className={styles.value}>{scheduleRowItem.eta_date}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t(
                                "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_DECLARATION_CLOSING"
                            )}
                        </span>
                        <span className={styles.value}>{scheduleRowItem.cut_off_date}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t("schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_LOAD_PLACE")}
                        </span>
                        <span className={styles.value}>
                            {scheduleRowItem.load_place.substr(0, 25)}
                        </span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t("schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_AGENCY")}
                        </span>
                        <span className={styles.value}>
                            {scheduleRowItem.lan_name.substr(0, 25)}
                        </span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.title}>
                            {t(
                                "schedule.body.table.SCHEDULE_SECTION_TABLE_HEADER_CELL_CONSOLE_CUTOFF"
                            )}
                        </span>
                        <span className={styles.value}>{scheduleRowItem.cutoff_date}</span>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <button
                            className="template-button-box-shadow template-button template-button-primary-2"
                            onClick={() => funcCopyOfShipInformations(scheduleRowItem)}
                        >
                            {t(
                                "template.buttons.TEMPLATE_COPY_BUTTON"
                            )}
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

ScheduleRowMobile.defaultProps = {
    rowIndex: 0,
    scheduleRowItem: {},
    funcCopyOfShipInformations: undefined,
    funcCollapse: undefined,
};

ScheduleRowMobile.propsTypes = {
    rowIndex: PropTypes.number.isRequired,
    scheduleRowItem: PropTypes.object.isRequired,
    funcCopyOfShipInformations: PropTypes.func.isRequired,
    funcCollapse: PropTypes.func.isRequired,
};

export default ScheduleRowMobile;
