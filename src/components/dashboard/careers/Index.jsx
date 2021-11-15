import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar";
import Table from "./Table";

const Index = () => {
    return (
        <div id="careers" style={{ padding: "30px" }}>
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col>
                        <h2>Careers | Midas Global Logistic</h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Table />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Index;
