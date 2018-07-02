import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { getArticles } from '../../redux/actions';
import Grid  from '../common/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import  APIProfile  from '../../redux/actions/candidateProfileAction';
// import DatePicker from 'material-ui/DatePicker'
// import TimePicker from 'material-ui/TimePicker';
import  APICandidate  from '../../redux/actions/candidateProfileAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
                conformPassword:""

        },

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
    }

    render() {
        var margin  = {
            margin : "2rem"
        };
        return (
            <div style={margin}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 float-left" >
                        <TextField
                            id="firstName"
                            label="First Name"
                            value={this.state.candidate.firstName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="firstName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 float-right" >
                        <TextField
                            id="lastName"
                            label="Last Name"
                            value={this.state.candidate.lastName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="lastName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="DOB"
                            label="DOB"
                            value={this.state.candidate.DOB}
                            onChange={this.handleChange}
                            margin="normal"
                            name="DOB"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="image"
                            label="Image"
                            value={this.state.candidate.image}
                            onChange={this.handleChange}
                            margin="normal"
                            name="image"
                            fullWidth
                        /> </div>
                </div>
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
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="coverPage"
                            label="Cover Page(Optional)"
                            value={this.state.candidate.coverPage}
                            onChange={this.handleChange}
                            margin="normal"
                            name="CoverPage"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="resume"
                            label="resume"
                            value={this.state.candidate.resume}
                            onChange={this.handleChange}
                            margin="normal"
                            name="resume"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="skills"
                            label="Skills"
                            value={this.state.candidate.skills}
                            onChange={this.handleChange}
                            margin="normal"
                            name="skills"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="yearsOfExperiance"
                            label="Years Of Experiance"
                            value={this.state.candidate.yearsOfExperiance}
                            onChange={this.handleChange}
                            margin="normal"
                            name="yearsOfExperiance"
                            fullWidth
                        /> </div>
                </div>
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

                        /> </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" onClick={this.handleSubmitButton} >
                            Submit profile
                        </Button>
                    </div>
                </div>

                {/*<pre>{JSON.stringify(this.props.articles.articles, null, 2) }</pre>

                 <Grid

                 dataset={this.props.articles.articles}
                 header={["ID#","Title","Text","Action"]}
                 headerMapping={["id","title","text"]}
                 actionNames={["Open", "Give Review"]}
                 handleAction = {this.handleAction}
                 />*/}
            </div >


            // {this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node}
            //

        )
    }
}

function mapStateToProps(state) {
    return {

        candidate : state.candidateReduicer.candidate ,
        // isGettingVacancy: state.positionReduicer.isGettingPosition,
        error : state.positionReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // getPosition:APIPosition.getPosition ,
        // getQualification:APIQualification.getQualification,
        // postPosition:APIPosition.postPosition,
        postCandidate:APICandidate.postProfile
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile)





