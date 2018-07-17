import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import  candidateActions  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NotificationSystem from "react-notification-system";
import { style } from "../../variables/Variables.jsx";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
class PersonalInfo extends Component {
    constructor () {
        super ();
        this.state = {
            firstName : "",
            lastName:"",
            DOB: "",
            gender:""
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    handleResetButton=()=> {

        this.setState({firstName : "",
            lastName:"",
            DOB: ""
        })
    };
    handleGenderChange = (event)=> {

        this.setState({gender: event.target.value});
        console.log(this.state.gender)
    }

    render() {

        return (
            <ValidatorForm

                onSubmit={this.handleSubmitButton}

            >
            <div className="content">
                <div className="row">
                    <div style={{color:"#F00"}} className="col-lg-12 col-md-6 col-sm-12 float-left" >
                        {this.props.validationMsg}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-left" >

                        <TextField
                            id="firstName"
                            label="First Name"
                            value={this.props.firstName}
                            onChange={this.props.handleChange}
                            margin="normal"
                            name="firstName"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 float-right" >
                        <TextField
                            id="lastName"
                            label="Last Name"
                            value={this.props.lastName}
                            onChange={this.props.handleChange}
                            margin="normal"
                            name="lastName"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="DOB"
                            type="date"
                            value={this.props.DOB}
                            onChange={this.props.handleChange}
                            margin="normal"
                            name="DOB"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                        /> </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <FormControl component="fieldset" required >

                            <FormLabel component="legend">Gender</FormLabel>

                            <RadioGroup
                                aria-label="Gender"
                                name="gender"
                                value={this.props.gender}
                                onChange={this.handleGenderChange}
                                style={{display:"inline"}}
                            >
                                <FormControlLabel value="Male" control={<Radio  color="primary" />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />

                            </RadioGroup>
                        </FormControl>

                    </div>
                </div>

            </div>
                </ValidatorForm>
        );
    }
}



function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveDocument:candidateActions.saveDocument
    }, dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
