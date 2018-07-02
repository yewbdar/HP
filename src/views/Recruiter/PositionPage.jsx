import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import Position from "../../components/recruiter/Position";
import ViewPosition from "../../components/recruiter/ViewPosition";


class PositionPage extends Component {
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
                                title="Create New Position"
                                category="Position Registration"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <div >
                                        <Position />
                                        <div style={space}>
                                            <ViewPosition />
                                        </div>
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

export default PositionPage;
