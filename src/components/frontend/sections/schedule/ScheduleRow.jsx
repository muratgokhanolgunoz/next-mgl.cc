import React from "react";
import styles from "../../../../../styles/Schedule.module.scss"

const ScheduleRow = ({ scheduleRowItem, funcCopyOfShipInformations }) => {
    return (
        <>
            <tr
                style={{ cursor: "pointer" }}
                onClick={() =>
                    funcCopyOfShipInformations(
                        scheduleRowItem
                    )
                }
            >
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        <b>{scheduleRowItem.destination_name}</b>
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.ship_name}
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.eta_date}
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.cut_off_date}
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.load_place.substr(0, 25)}
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.lan_name.substr(0, 25)}
                    </span>
                </td>
                <td>
                    <span className={styles.tableScheduleRowSpan}>
                        {scheduleRowItem.cutoff_date}
                    </span>
                </td>
            </tr>
        </>
    );
};
export default ScheduleRow;
