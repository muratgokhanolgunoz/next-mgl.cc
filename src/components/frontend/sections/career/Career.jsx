import React, { useState, useContext } from "react";
import { useTranslation } from "next-i18next";
import { showToast, validateEmail } from "../../../../core/functions";
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    FloatingLabel,
} from "react-bootstrap";
import { VscCheck } from "react-icons/vsc";
import { uploadCareer } from "../../../../utils/services/careerService";
import styles from "../../../../../styles/Career.module.scss";

let formError;

const Career = (_) => {
    const { t, i18n } = useTranslation("common");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");

    const upload = (_e) => {
        _e.preventDefault();
        formError = false;
        if (name === "") {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_NAME"
                ),
                "error"
            );
            formError = true;
        }

        if (surname === "") {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_SURNAME"
                ),
                "error"
            );
            formError = true;
        }

        if (email === "") {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL"
                ),
                "error"
            );
            formError = true;
        }

        if (email !== "" && !validateEmail(email)) {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT"
                ),
                "error"
            );
            formError = true;
        }

        if (phone === "") {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_PHONE"
                ),
                "error"
            );
            formError = true;
        }

        if (file === "") {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE"
                ),
                "error"
            );
            formError = true;
        }

        if (file !== "" && file.size > 5242880) {
            showToast(
                "bottom-right",
                t(
                    "career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE_SIZE"
                ),
                "error"
            );
            formError = true;
        }

        if (formError === false) {
            const payload = new FormData();
            payload.append("name", name);
            payload.append("surname", surname);
            payload.append("email", email);
            payload.append("phone", phone);
            payload.append("message", message);
            payload.append("file", file);
            payload.append("language", i18n.language);

            uploadCareer(payload)
                .then((response) => {
                    response.data.result === true
                        ? showToast(
                              "bottom-right",
                              t(
                                  "career.body.notification.CAREER_SECTION_NOTIFICATION_SUCCESS_MESSAGE"
                              ),
                              "success"
                          )
                        : showToast(
                              "bottom-right",
                              t(
                                  "career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE"
                              ),
                              "error"
                          );

                    setName("");
                    setSurname("");
                    setEmail("");
                    setMessage("");
                    setPhone("");
                    setFile("");
                })
                .catch(() =>
                    showToast(
                        "bottom-right",
                        t(
                            "career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE"
                        ),
                        "error"
                    )
                );
        }
    };

    return (
        <div
            id="career"
            className={`${styles.career} section-padding`}
            style={{
                backgroundImage: `url("./assets/mglUploads/career/images/career_background.webp")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image
                            src={
                                "./assets/mglUploads/career/images/career_" +
                                i18n.language +
                                ".webp"
                            }
                            alt={t("career.header.CAREER_SECTION_TITLE") + " " + t("template.HTML_PAGE_TITLE")}
                            title={t("career.header.CAREER_SECTION_TITLE") + " " + t("template.HTML_PAGE_TITLE")}
                            fluid
                        />
                    </Col>
                    <Col lg={6}>
                        <form
                            onSubmit={(_e) => upload(_e)}
                            encType="multipart/form-data"
                        >
                            <Row>
                                <Col lg="12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                        className={`${styles.inputLabel} mb-2`}
                                    >
                                        <Form.Control
                                            className={styles.input}
                                            type="text"
                                            placeholder="."
                                            value={name}
                                            onChange={(_e) =>
                                                setName(
                                                    _e.target.value
                                                        .toString()
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        _e.target.value
                                                            .toString()
                                                            .slice(1)
                                                            .toLowerCase()
                                                )
                                            }
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Surname"
                                        className={`${styles.inputLabel} mb-2`}
                                    >
                                        <Form.Control
                                            className={styles.input}
                                            type="text"
                                            placeholder="."
                                            value={surname}
                                            onChange={(_e) =>
                                                setSurname(
                                                    _e.target.value
                                                        .toString()
                                                        .toUpperCase()
                                                )
                                            }
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="eMail"
                                        className={`${styles.inputLabel} mb-2`}
                                    >
                                        <Form.Control
                                            className={styles.input}
                                            type="text"
                                            placeholder="."
                                            value={email}
                                            onChange={(_e) =>
                                                setEmail(
                                                    _e.target.value
                                                        .toString()
                                                        .toLowerCase()
                                                )
                                            }
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Phone"
                                        className={`${styles.inputLabel} mb-2`}
                                    >
                                        <Form.Control
                                            className={styles.input}
                                            type="text"
                                            placeholder="."
                                            value={phone}
                                            onChange={(_e) =>
                                                setPhone(_e.target.value)
                                            }
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Message"
                                        className={`${styles.inputLabel} mb-2`}
                                    >
                                        <Form.Control
                                            className={styles.input}
                                            type="text"
                                            as="textarea"
                                            style={{
                                                height: "145px",
                                                maxHeight: "145px",
                                                minHeight: "145px",
                                            }}
                                            placeholder="."
                                            value={message}
                                            onChange={(_e) =>
                                                setMessage(_e.target.value)
                                            }
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group>
                                        <input
                                            id="input-upload"
                                            className={`${styles.inputUpload}`}
                                            type="file"
                                            name="file"
                                            accept=".pdf"
                                            onChange={(_e) =>
                                                setFile(_e.target.files[0])
                                            }
                                        />
                                        <Form.Text className="text-light">
                                            <span
                                                style={{
                                                    paddingLeft: "5px",
                                                }}
                                            >
                                                {t(
                                                    "career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_TYPE"
                                                )}
                                                &nbsp; : .pdf
                                            </span>
                                            <br />
                                            <span
                                                style={{
                                                    paddingLeft: "5px",
                                                }}
                                            >
                                                {t(
                                                    "career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_SIZE"
                                                )}
                                                &nbsp; : 5 MB
                                            </span>
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={{ offset: 6, span: 6 }}>
                                    <button
                                        type="submit"
                                        className="pin-to-right template-button template-button-primary-2 template-button-box-shadow"
                                    >
                                        <VscCheck size={14} /> &emsp;{" "}
                                        {t(
                                            "career.body.form.CAREER_SECTION_BUTTON_SEND"
                                        )}
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Career;
