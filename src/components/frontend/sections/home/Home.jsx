/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import WidgetTracking from "../home/WidgetTracking";
import WidgetFreight from "../home/WidgetFreight";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.scss";

const Home = ({ home }) => {
    const { t } = useTranslation("common");
    return (
        <div>
            <div
                id="home"
                className={styles.home}
                style={{
                    backgroundImage: `url("${home.photo}")`,
                    marginTop: "50px",
                }}
            >
                <div className={styles.homeCalender}>
                    <div
                        className={styles.homeCalenderItem}
                        style={{ backgroundColor: home.color }}
                    >
                        <span>
                            {t(
                                "home.calendar.CALENDAR_MONTH_NAMES." +
                                    home.currentMonth
                            )}
                        </span>
                        <h1>{home.currentDayNumberInMonth}</h1>
                        <span>
                            {t(
                                "home.calendar.CALENDAR_DAY_NAMES." +
                                    home.currentDayNumberInWeek
                            )}
                        </span>
                    </div>
                    <div
                        className={styles.homeCalenderItem}
                        style={{ backgroundColor: home.color }}
                    >
                        <span>
                            {t("home.calendar.CALENDAR_WEEK_TEXT")} :{" "}
                            {home.currentWeek}
                        </span>
                    </div>
                </div>
            </div>

            <div id="home-widgets">
                <Container className="main" style={{ marginTop: "-100px" }}>
                    <Row>
                        <Col xl={{ span: 4, offset: 2 }} md={6}>
                            <WidgetTracking />
                        </Col>

                        <Col xl={4} md={6}>
                            <WidgetFreight />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;
