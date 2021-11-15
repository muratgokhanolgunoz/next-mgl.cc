/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import { Table as BootstrapTable } from "react-bootstrap";
import { getCareerList } from "../../../utils/services/careerService";
import Modal from "../../../components/frontend/tools/Modal";

const Table = (_) => {
    const [careerList, setCareerList] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [selectedCareerItem, setSelectedCareerItem] = useState({});

    useEffect(() => {
        getCareerList()
            .then((response) => setCareerList(response.data.result.reverse()))
            .then((response) => console.log(response))
            .catch(() => console.warn("Error : API ERROR"));
    }, []);

    return (
        <div id="careers-table">
            <BootstrapTable striped={true} responsive={true}>
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>File</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {careerList.map((careerItem) => (
                        <TableRow
                            key={careerItem.id}
                            career={careerItem}
                            funcSetSelectedCareerItem={setSelectedCareerItem}
                            funcSetModalState={setModalState}
                        />
                    ))}
                </tbody>
            </BootstrapTable>
            {modalState && (
                <Modal selector="#__modal" toogle={setModalState}>
                    <div style={{ padding: "20px" }}>
                        <h2>{`${selectedCareerItem.name} ${selectedCareerItem.surname}`}</h2>
                        <p>{selectedCareerItem.message}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Table;
