/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import { Table as BootstrapTable } from "react-bootstrap";
import { getCareerList } from "../../../utils/services/careerService";
import Modal from "../../../components/frontend/tools/Modal";
import { deleteCareer } from "../../../utils/services/careerService";
import { showToast } from "../../../core/functions";

const Table = (_) => {
    const [careerList, setCareerList] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [selectedCareerItem, setSelectedCareerItem] = useState({});

    useEffect(() => {
        getCareers();
    }, []);

    const getCareers = () => {
        getCareerList()
            .then((response) => {
                if (response.status === 200) {
                    setCareerList(response.data.result.reverse());
                }
            })
            .catch((error) => {
                console.warn(error);
                showToast("bottom-center", error, "error");
            });
    };

    const deleteCareerRow = (_id) => {
        if (confirm("Do you really want to delete your career row with id " + _id + " ?")) {
            const payload = new FormData();
            payload.append("id", _id);

            deleteCareer(payload)
                .then((response) => {
                    if (response.status === 200) {
                        showToast("bottom-right", "Success", "success");
                    } else {
                        showToast("bottom-right", "An error occured", "error");
                    }
                })
                .then(() => {
                    getCareers();
                })
                .catch((error) => {
                    console.log(error);
                    showToast("bottom-right", error, "error");
                });
        }
    };

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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {careerList.map((careerItem) => (
                        <TableRow
                            key={careerItem.id}
                            career={careerItem}
                            funcSetSelectedCareerItem={setSelectedCareerItem}
                            funcSetModalState={setModalState}
                            funcDelete={deleteCareerRow}
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
