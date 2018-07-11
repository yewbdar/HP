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
import ContactInfo from "../../views/Candidate/contactInfo";
import UploadFile from "../../views/Candidate/uploadFile";

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
        return ['Personal information', 'create account','contact information ', 'Upload resume '];
     }

   getStepContent  = (step)=> {
       switch (step) {
           case 0:
               return <PersonalInfo />;
           case 1:
               return <ContactInfo/>;
           case 2:
               return <UploadFile/>;
           case 3:
               return <UploadFile/>;
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
                                    <div>
                                        {/*<h1 className="align-center">*/}
                                            {/*All steps completed ...*/}
                                        {/*</h1>*/}
                                        <h1 className="align-center">
                                            Thank you for submitting !
                                        </h1>
                                    </div>

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





