import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  APICandidate  from '../../redux/actions/candidateProfileAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from "../../views/Candidate/PersonalInfo";


class  CandidateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

            candidate: {
            firstName: "",
            lastName: "",
            DOB: "",
            image: "",
            resume:"",
            coverPage: "",
            telephone:"",
            email:"",
            street:"",
            city:"",
            country:"",
            zip:"",
            qualifications:"",
            skills:"",
           yearsOfExperiance:"",
           userName:"",
           password:"",
           conformPassword:"",


        },
            activeStep:0,
            skipped: new Set(),

        }
    }
    handleChange =(event)=>{
        const {name, value} = event.target;
        let candidate =  this.state.candidate;
        candidate[name] = value;
        this.setState({candidate: candidate});
        // console.log(value)

 }
    componentDidMount() {
        //after component loads bring data
        // this.setState({article:getArticles()})
    }
    handleOpen=(articleId)=>{
        console.log(articleId);
    };
    handleGiveReview=(event)=>{

    };
    handleAction=(event) =>{
        let clicked = event.target.getAttribute("name");
        let articleId = event.target.getAttribute("data-article-id");
        switch (clicked) {
            case "Open" :
                this.handleOpen(articleId);
                break;
            default :
                break;
        };

    };

    handleSubmitButton=(event)=>{
        event.preventDefault();
        // this.setState((state) =>({
        //     ...state,
        //     dataForSave: {
        //         // firstName: this.state.txtFirstName,
        //         // lastName: this.state.txtLastName,
        //         // dob: this.state.txtDOB,
        //         // image: this.state.txtImage,
        //         // resume: this.state.txtResume,
        //         // coverPage: this.state.txtCoverPage
        //     }
        // }),() => {
        console.log(this.state.candidate);
        this.props.postCandidate(this.state.candidate);

            // this.props.getVacancy();
            // console.log(this.state.dataForSave)
            // this.props.getVacancy();


        // });
    };
   getSteps = ()=> {
        return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
     }

   getStepContent  = (step)=> {
       switch (step) {
           case 0:
               return <PersonalInfo />;
           case 1:
               return 'What is an ad group anyways?';
           case 2:
               return 'This is the bit I really care about!';
           default:
               return 'Unknown step';
       }
   };

    isStepOptional = step => {
        return step === 1;
    };

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    isStepSkipped = (step) => {
        return this.state.skipped.has(step);
    }

    render() {

        const steps = this.getSteps();
        const { activeStep } = this.state;

        var margin  = {
            margin : "2rem"
        };
        return (
            <div style={margin}>

                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="image"*/}
                            {/*label="Image"*/}
                            {/*value={this.state.candidate.image}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="image"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="resume"*/}
                            {/*label="Resume"*/}
                            {/*value={this.state.candidate.resume}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="resume"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="coverPage"*/}
                            {/*label="Cover Page(Optional)"*/}
                            {/*value={this.state.candidate.coverPage}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="CoverPage"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="resume"*/}
                            {/*label="resume"*/}
                            {/*value={this.state.candidate.resume}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="resume"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="skills"*/}
                            {/*label="Skills"*/}
                            {/*value={this.state.candidate.skills}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="skills"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-12" >*/}
                        {/*<TextField*/}
                            {/*id="yearsOfExperiance"*/}
                            {/*label="Years Of Experiance"*/}
                            {/*value={this.state.candidate.yearsOfExperiance}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*margin="normal"*/}
                            {/*name="yearsOfExperiance"*/}
                            {/*fullWidth*/}
                        {/*/> </div>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="telephone"
                            label="Telephone"
                            value={this.state.candidate.telephone}
                            onChange={this.handleChange}
                            margin="normal"
                            name="telephone"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.candidate.email}
                            onChange={this.handleChange}
                            margin="normal"
                            name="email"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="street"
                            label="Street"
                            value={this.state.candidate.street}
                            onChange={this.handleChange}
                            margin="normal"
                            name="street"

                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="city"
                            label="City"
                            value={this.state.candidate.city}
                            onChange={this.handleChange}
                            margin="normal"
                            name="city"

                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="country"
                            label="Country"
                            value={this.state.candidate.country}
                            onChange={this.handleChange}
                            margin="normal"
                            name="country"

                        /> </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <TextField
                        id="zip"
                        label="Zip"
                        value={this.state.candidate.zip}
                        onChange={this.handleChange}
                        margin="normal"
                        name="zip"
                        type="number"
                    /> </div>
            </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <TextField
                        id="userName"
                        label="userName"
                        value={this.state.candidate.userName}
                        onChange={this.handleChange}
                        margin="normal"
                        name="userName"

                    /> </div>
            </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.candidate.password}
                            onChange={this.handleChange}
                            margin="normal"
                            name="password"
                            type="password"

                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="conformPassword"
                            label="Conform Password"
                            value={this.state.candidate.conformPassword}
                            onChange={this.handleChange}
                            margin="normal"
                            name="conformPassword"
                            type="password"

                        /> </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" onClick={this.handleSubmitButton} >
                            Submit profile
                        </Button>
                    </div>
                </div>




                <div >
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const props = {};
                            const labelProps = {};
                            if (this.isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (this.isStepSkipped(index)) {
                                props.completed = false;
                            }
                            return (
                                <Step key={label} {...props}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography >
                                    All steps completed - you&quot;re finished
                                </Typography>
                                <Button onClick={this.handleReset} >
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <Typography >{this.getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}

                                    >
                                        Back
                                    </Button>
                                    {this.isStepOptional(activeStep) && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSkip}

                                        >
                                            Skip
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}

                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div >


        )
    }
}

function mapStateToProps(state) {
    return {
       candidate : state.candidateReduicer.candidate ,
        error : state.positionReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postCandidate:APICandidate.postProfile
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile)





