import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Card from "../../components/Card/Card.jsx";

class ContactInfo extends Component {
    constructor () {
        super ();
        this.state = {
            telephone:"",
            email:"",
            street:"",
            city:"",
            country:"",
            zip:"",
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    render() {

        return (
            <div className="content">

                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="telephone"
                            label="Telephone"
                            value={this.state.telephone}
                            onChange={this.handleChange}
                            margin="normal"
                            name="telephone"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-right" >
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                            name="email"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="street"
                            label="Street"
                            value={this.state.street}
                            onChange={this.handleChange}
                            margin="normal"
                            name="street"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="city"
                            label="City"
                            value={this.state.city}
                            onChange={this.handleChange}
                            margin="normal"
                            name="city"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="country"
                            label="Country"
                            value={this.state.country}
                            onChange={this.handleChange}
                            margin="normal"
                            name="country"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="zip"
                            label="Zip"
                            value={this.state.zip}
                            onChange={this.handleChange}
                            margin="normal"
                            name="zip"
                            type="number"
                            fullWidth
                        /> </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
