import React ,{Component } from 'react';
import ReactDOM from 'react-dom';
import addButton from '../common/Button';
import DataTable from './Form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
class  Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtJobTitle:"",
            txtSummary:"",
            txtQualification:"",
            txtAdditionalTechnicalSkills:"",

            person : {
            age: '',
            name: 'hai',
        }
        };

    }
    handleChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name] : value});

    }




    render() {

        return (
            <div>
                <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <FormControl >
                            <InputLabel htmlFor="age-auto-width">Hub</InputLabel>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                input={<Input name="hub" id="hub" />}
                                autoWidth
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>ecx </MenuItem>
                                <MenuItem value={20}>bank of america</MenuItem>
                                <MenuItem value={30}>this is new company</MenuItem>
                            </Select>
                            <FormHelperText>Auto width</FormHelperText>
                        </FormControl>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="summary"
                            label="Summary"
                            value={this.state.txtSummary}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtSummary"
                            type="Multi-line"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12" >
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
                    <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" >
                            Primary
                        </Button>
                    </div>
                </div>

            </div>


        )
    }
}

export default Form;







