import React, { useState } from "react";
import Context from "./Context";

const ContextWrapper = (props) => {
    const [blogsStatus, setBlogsStatus] = useState(false);
    const [modalStylesState, setModalSyleState] = useState(false);
    const [dashboardBlogsLanguage, setDashboardBlogsLanguage] = useState("tr");
    const [token, setToken] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [vesselSchedule, setVesselSchedule] = useState({
        mobileActiveItem: undefined,
    });

    return (
        <Context.Provider
            value={{
                blogsStatus,
                modalStylesState,
                dashboardBlogsLanguage,
                token,
                isMobile,
                vesselSchedule,
                funcsetBlogsStatus: (_blogsStatus) => setBlogsStatus(_blogsStatus),
                funcSetModalStyleState: (_modalState) => setModalSyleState(_modalState),
                funcSetDashboardBlogsLanguage: (_language) => setDashboardBlogsLanguage(_language),
                funcSetToken: (_token) => setToken(_token),
                funcSetIsMobile: (_isMobile) => setIsMobile(_isMobile),
                funcSetVesselSchedule: (_vesselSchedule) => setVesselSchedule(_vesselSchedule),
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default ContextWrapper;
