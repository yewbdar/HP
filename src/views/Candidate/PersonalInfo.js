import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Card from "../../components/Card/Card.jsx";

class PersonalInfo extends Component {
    constructor () {
        super ();
        this.state = {
            firstName : "",
            lastName:"",
            DOB: ""
        }
    }
    handleChange = () => {}
    render() {

        return (
            <div className="content">

                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="firstName"
                            label="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="firstName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-right" >
                        <TextField
                            id="lastName"
                            label="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="lastName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="DOB"
                            label="DOB"
                            value={this.state.DOB}
                            onChange={this.handleChange}
                            margin="normal"
                            name="DOB"
                            fullWidth
                        /> </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
