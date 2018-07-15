import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import LoginComponent from "../../components/common/Login"
class Login extends Component {
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
                                title="login"
                                category="login"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <div >
                                        <LoginComponent />
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

export default Login;
