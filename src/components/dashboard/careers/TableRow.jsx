import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ career, funcSetSelectedCareerItem, funcSetModalState }) => {
    return (
        <>
            <tr>
                <td>{career.name}</td>
                <td>{career.surname}</td>
                <td>
                    <a href={"mailto:" + career.email}>{career.email}</a>
                </td>
                <td>
                    <a href={"tel:" + career.phone}>{career.phone}</a>
                </td>
                <td>
                    {career.message !== null ? (
                        <a
                            className="text-primary"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                funcSetModalState(true);
                                funcSetSelectedCareerItem(career);
                            }}
                        >
                            View
                        </a>
                    ) : (
                        "null"
                    )}
                </td>
                <td>
                    <a href={career.file} target="_blank" rel="noreferrer">
                        CV File
                    </a>
                </td>
                <td>{career.date}</td>
            </tr>
        </>
    );
};

TableRow.propTypes = {
    career: PropTypes.object.isRequired,
    funcSetSelectedCareerItem: PropTypes.func.isRequired,
    funcSetModalState: PropTypes.func.isRequired,
};

export default TableRow;
