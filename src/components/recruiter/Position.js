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
import  APIQualification  from '../../redux/actions/qualificationAction';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Grid  from '../common/Grid';
class  Position extends Component {
    constructor(props){
        super(props);
        this.state = {
            position : {
                title: "",
                qualification:"",
                skill: "",
                summary: "",
                isActive: false,
        }

        };

    }

    handleChange =(event)=>{

        const {name, value} = event.target;
        let position =  this.state.position;
         position[name] = value;
        this.setState({position: position});
        // console.log(value)

    }
    toggleIsActive = () => {
        let position =  this.state.position;
        position.isActive = !position.isActive;
        this.setState({ position  : position });
    };

    componentDidMount() {
        //after component loads bring data
        this.props.getPosition();
        this.props.getQualification();
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
        const { title, qualification, skill , summary , isActive } = this.state.position;
        this.props.postPosition({
            title,
            qualifications : [qualification],
            skill ,
            summary ,
            isActive
        });
    }

    render() {

        var margin  = {
            margin : "2rem"
        };
        return (
            <div style={margin}>
                <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" >
                            <TextField
                                        label="Job Title"
                                        value={this.state.position.title}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        name="title"
                                        fullWidth
                            /> </div>
                </div>


                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 " >
                    <InputLabel >qualification</InputLabel>
                        <Select
                            value={this.state.position.qualification}
                            onChange={this.handleChange}
                            input={<Input name="qualification"  />}
                            fullWidth
                            name="qualification"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            { this.props.qualification.map( item => {
                                return (<MenuItem value={item["_id"]}>{item.name}</MenuItem>)
                            })}
                        </Select>

                </div>
                    </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 align-self-end" >
                        <TextField
                            id="skill"
                            label="Skill"
                            value={this.state.position.skill}
                            onChange={this.handleChange}
                            margin="normal"
                            name="skill"
                            type="Multi-line"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 align-self-end" >
                        <TextField
                            id="summary"
                            label="Summary"
                            value={this.state.position.summary}
                            onChange={this.handleChange}
                            margin="normal"
                            name="summary"
                            type="Multi-line"
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 align-self-end" >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.position.isActive}
                                onChange={this.toggleIsActive}
                                value="isActive"
                                color="primary"
                                label="Custom color"

                            />
                        }
                        label="Active"
                    />
                        </div>
                </div>


                <div className="row">
                    <div class="col-lg-12 col-md-6 col-sm-12" >
                        <Button className="pull-right" variant="outlined" color="primary" onClick={this.handleSubmitButton}>
                            Submit
                        </Button>
                    </div>
                </div>

                {/*<pre>{JSON.stringify(this.props.qualification, null, 2) }</pre>*/}


            </div >



        )
    }
}

// export default Postion;
function mapStateToProps(state) {
    return {
        Position : state.positionReduicer.position ,
        qualification:state.qualificationReduicer.qualification,
        isGettingVacancy: state.positionReduicer.isGettingPosition,
        error : state.positionReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPosition:APIPosition.getPosition ,
                                getQualification:APIQualification.getQualification,
                                postPosition:APIPosition.postPosition
                                }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Position)








