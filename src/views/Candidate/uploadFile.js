import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { Document, Page } from 'react-pdf';
import TextField from '@material-ui/core/TextField';
import  candidateActions  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import  APIQualification  from '../../redux/actions/qualificationAction';
class uploadFile extends Component {
    constructor(){
        super();
        this.state = {
            url:'',
            numPages: null,
            pageNumber: 1,
            file : null,
            fileName:"",
            selectedQualifications :[],
        }
    }
    componentDidMount() {
        //after component loads bring data

        // ValidatorForm.addValidationRule('isTruthy', value => value);

        this.props.getQualification();
    }
    handleSelectedQualifications(selected){
        let selectedQualificationForDisplay = [];
        this.props.qualifications.map(qualification => {

            if(selected.indexOf(qualification["_id"]) !== -1 ){
                selectedQualificationForDisplay.push(qualification.name);
            }
        });
        return selectedQualificationForDisplay.join(" , ");
    };
    handleQualificationChange = event => {
        this.setState({ selectedQualifications: event.target.value });
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    handleUploadImage = (event) =>{
        // const data = new FormData();
        // data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.fileName.value);
        this.props.saveDocument({
                                    file : this.state.file,
                                    fileName :this.state.fileName
                                });
        event.preventDefault();
    };
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    onChange = (e) => {
        this.setState({file:e.target.files[0]})
    }

    render() {
        const { pageNumber, numPages } = this.state;

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
                                <form onSubmit={this.handleUploadImage} encType="multipart/form-data" style={{marginLeft : "1rem"}}>

                                           <div className="row" style={{marginLeft : "1rem"}}>
                                                <div className="col-lg-12" style={{maxHeight : "2rem"}}>
                                                    <input  type="file" name="file" id="file" class="custom-file-input"  onChange={this.onChange}  />
                                                    <label for="file" class="custom-file-label"> Resume </label>
                                                </div>
                                           </div>
                                           <div className="row" style={{marginLeft : "1rem"}}>

                                               <div className="col-lg-12" style={{  maxHeight : "10rem" ,
                                                                                    overflowY : "scroll" ,
                                                                                    border:"1px solid #C0C0C0",
                                                                                    borderRadius:"5px",
                                                                                    marginTop : "1rem"
                                                                                }}>
                                                   Preview
                                                    <Document
                                                        file={this.state.file}
                                                        onLoadSuccess={this.onDocumentLoadSuccess}
                                                    >
                                                        <Page pageNumber={pageNumber} />
                                                    </Document>
                                                    <div className="mx-auto" style={{width : "10rem"}}> Page {pageNumber} of {numPages}</div>
                            </div>
                                           </div>

                                            <div className="row"  style={{marginLeft : "1rem", marginTop : "1rem" }}>
                                                <TextField
                                                    id="firstName"
                                                    label="Enter Desired File Name "
                                                    value={this.state.fileName}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                    name="fileName"
                                                    fullWidth
                                                />

                                            </div>
                                            {/*<div className="row"  style={{marginLeft : "1rem", marginTop : "1rem"}}>*/}
                                                {/*Qualifications*/}
                                            {/*</div>*/}

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 " >
                                            <InputLabel >qualification</InputLabel>


                                            <FormControl fullWidth >
                                                <Select

                                                    multiple
                                                    value={this.state.selectedQualifications}
                                                    onChange={this.state.handleQualificationChange}
                                                    input={<Input id="select-multiple-checkbox" />}
                                                    renderValue={selected => this.handleSelectedQualifications(selected)}
                                                >
                                                    {this.props.qualifications.map(qualification => (

                                                        <MenuItem key={qualification["_id"]} value={qualification["_id"]}>
                                                            <Checkbox checked={this.state.selectedQualifications.indexOf(qualification["_id"]) > -1} />

                                                            <ListItemText primary={qualification.name} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="row"  style={{marginLeft : "1rem", marginTop : "1rem"}}>
                                        <input type="submit" value="Submit" />
                                    </div>

                                </form>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>

                {/*<pre>{JSON.stringify(this.props.qualifications, null, 2) }</pre>*/}

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        // positions : state.positionReduicer.position,
        qualifications:state.qualificationReduicer.qualification,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveDocument:candidateActions.saveDocument,
        getQualification:APIQualification.getQualification,

        // getPositions:APIPosition.getActivePosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(uploadFile)