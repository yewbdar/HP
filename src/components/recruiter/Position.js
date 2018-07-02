import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import  APIPosition  from '../../redux/actions/positionActions';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Grid  from '../common/Grid';
class  Position extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataForSave:{},
            txtJobTitle:"",
            txtSummary:"",
            txthub:"ecx",
            txtQualification:"",
            txtAdditionalTechnicalSkills:"",
        };

    }

    handleChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    componentDidMount() {
        //after component loads bring data
        this.props.getPosition();



    }

    handleOpen=(articleId)=>{
        console.log(articleId);
    };
    handleGiveReview=(event)=>{

    };
    handleAction=(event) =>{
        let clicked = event.target.getAttribute("name");
        let postionId = event.target.getAttribute("data-postion-id");
        switch (clicked) {
            case "Open" :
                this.handleOpen(postionId);
                break;
            default :
                break;
        };

    }
    handleSubmitButton=(event)=> {
        event.preventDefault();
        this.setState((state) =>({
            ...state,
            dataForSave: {
                jobTitle: this.state.txtJobTitle,
                hub: "ecx",//this.state.txthub,
                summary: this.state.txtSummary,
                qualification: this.state.txtQualification,
                additionalTechnicalSkill: this.state.txtAdditionalTechnicalSkills

            }
        }),() => {

            APIPosition.postPosition(this.state.dataForSave);

                    this.props.getPosition();
            // console.log(this.state.dataForSave)
            // this.props.getVacancy();

        });
    }

    render() {

        return (
            <div>
                <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" >
                            <TextField
                                        id="jobTitle"
                                        label="Job Title"
                                        value={this.state.txtJobTitle}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        name="txtJobTitle"
                                        fullWidth
                            /> </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 align-self-end" >
                        <TextField
                            id="summary"
                            label="Summary"
                            value={this.state.txtSummary}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtSummary"
                            type="Multi-line"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 align-self-end" >
                    <InputLabel htmlFor="age-helper">Age</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        input={<Input name="age" id="age-helper" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </div>
                    </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" >
                        <TextField
                            id="qualification"
                            label="Qualification"
                            value={this.state.txtQualification}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtQualification"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" >
                        <TextField
                            id="additionalTechnicalSkills"
                            label="Additional Technical skills"
                            value={this.state.txtAdditionalTechnicalSkills}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtAdditionalTechnicalSkills"
                            fullWidth
                        /> </div>
                </div>

                <div className="row">
                    <div class="col-lg-12 col-md-6 col-sm-12" >
                        <Button className="pull-right" variant="outlined" color="primary" onClick={this.handleSubmitButton}>
                            Submit
                        </Button>
                    </div>
                </div>

                {/*<pre>{JSON.stringify(this.props.Position, null, 2) }</pre>*/}

                {/* <Grid

                  dataset={this.props.Position}
                  header={["ID","job Title","hub","summary","qualification","additionalTechnicalSkill","Action"]}
                  headerMapping={["vacancyId","jobTitle","hub","summary","qualification","additionalTechnicalSkill"]}
                  actionNames={["view", "Activate ","Deactivate","Edit"]}
                   handleAction = {this.handleAction}
                />*/}
            </div >


        // {this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node}
        //

        )
    }
}

// export default Vacancy;
function mapStateToProps(state) {
    return {
        Position : state.positionReduicer.position ,
        isGettingVacancy: state.positionReduicer.isGettingPosition,
        error : state.positionReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPosition:APIPosition.getPosition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Position)








