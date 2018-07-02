import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import Position from "../../components/recruiter/Position";
import CandidatePage from "../../components/candidate/CandidateProfile";

class Candidate extends Component {
    render() {
        var space = {
            marginTop : "2rem"
        }
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Create Profile"
                                category="Profile Registration"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <div >
                                        <CandidatePage />
                                    </div>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Candidate;
