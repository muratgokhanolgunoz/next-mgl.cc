import React from "react";
import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const TableRow = ({ career, funcSetSelectedCareerItem, funcSetModalState, funcDelete }) => {

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
                    <a href={career.location} target="_blank" rel="noreferrer">
                        CV File
                    </a>
                </td>
                <td>{career.date}</td>
                <td>
                    <a
                        className="text-primary"
                        style={{
                            cursor: "pointer",
                            fontSize: "1.3em",
                            color: "#000",
                        }}
                        onClick={() => funcDelete(career.id)}
                    >
                        <RiDeleteBinLine />
                    </a>
                </td>
            </tr>
        </>
    );
};

TableRow.propTypes = {
    career: PropTypes.object.isRequired,
    funcSetSelectedCareerItem: PropTypes.func.isRequired,
    funcSetModalState: PropTypes.func.isRequired,
    funcDelete: PropTypes.func.isRequired
};

export default TableRow;
