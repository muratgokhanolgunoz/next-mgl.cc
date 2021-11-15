import React, { useState } from "react";
import Context from "./Context";

const ContextWrapper = (props) => {
    const [blogsStatus, setBlogsStatus] = useState(false);
    const [modalStylesState, setModalSyleState] = useState(false);
    const [dashboardBlogsLanguage, setDashboardBlogsLanguage] = useState("tr");
    const [token, setToken] = useState("");

    return (
        <Context.Provider
            value={{
                blogsStatus,
                modalStylesState,
                dashboardBlogsLanguage,
                token,
                funcsetBlogsStatus: (_blogsStatus) => setBlogsStatus(_blogsStatus),
                funcSetModalStyleState: (_modalState) => setModalSyleState(_modalState),
                funcSetDashboardBlogsLanguage: (_language) => setDashboardBlogsLanguage(_language),
                funcSetToken: (_token) => setToken(_token),
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default ContextWrapper;
