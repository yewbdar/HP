import React ,{Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import  APICandidate from '../../redux/actions/candidateActions';

import Grid  from '../common/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class  FeedBack extends Component {
    constructor(props){
        super(props);
        this.state = {
            position:"",
            interviewType:"Technical",
            interviewedBy:"",
            id:"",
            position:"",
            comment:"",
            passed:"",
            interviewedOn:Date.now()
        };

    }

    handleChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name] : value});
        console.log(value)

    }
    componentDidMount() {
        //after component loads bring data
        // this.setState({article:getArticles()})


    }
    handleFeedbackChange = (event)=>{

        this.setState({ passed: event.target.value});
        if(this.state.passed === "Pass"){
            this.setState({ passed:true});
        }else {
            this.setState({ passed:false});
        }

        console.log(this.state.passed)
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

    }
    handleSubmitButton=(event)=> {
        event.preventDefault();
        this.setState((state) =>({
            ...state,
                id:this.props.id,
                interviewedBy: "5b3cfd4b410fa118837ba10d",
                position:this.state.position,
                comment: this.state.comment,
                passed: this.state.passed,
                interviewedOn:Date.now()


        }),() => {
            this.props.feedbackForApplyedPosition({
                                                    id: this.props.id,
                                                    interviewedBy: "5b3cfd4b410fa118837ba10d",
                                                    position: this.state.position,
                                                    comment: this.state.comment,
                                                    passed: this.state.passed,
                                                    interviewedOn: Date.now()
                                                  });

            // this.props.getVacancy();
            // console.log(this.state.dataForSave)
            // this.props.getVacancy();


        });
    };
    handlePositionChange = (event) => {
        this.setState({
            position:event.target.value
        })
        console.log(this.state.position)
    };



    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            id="interview"
                            label="Interview#"
                            value={this.props.txtInterview}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtInterview"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 align-self-end" >
                        <TextField
                            id="candidateName"
                            label="Candidate Name"
                            value={this.props.fullName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtCandidateName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        {/*<pre>Positions : {JSON.stringify(this.props.positions, null, 2) }</pre>*/}
                        <FormControl fullWidth >
                                <InputLabel htmlFor="position">Position</InputLabel>

                                <Select
                                    value={this.state.position}
                                    onChange={this.handlePositionChange}
                                    input={<Input name="position" id="position" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.positions.map(position => (
                                        <MenuItem key={position._id} value={position.position._id}>
                                           {position.position.title}
                                        </MenuItem>
                                    ))}

                                </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <TextField
                            multiline
                            rows="4"
                            id="comment"
                            label="Feed Back"
                            value={this.state.txtFeedBack}
                            onChange={this.handleChange}
                            margin="normal"
                            name="comment"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12" >
                        <FormControl component="fieldset" required >

                            <FormLabel component="legend">Result</FormLabel>

                            <RadioGroup
                                aria-label="Feedback Result"
                                name="feedback-result"
                                value={this.state.passed}
                                onChange={this.handleFeedbackChange}
                                style={{display:"inline"}}
                            >
                                <FormControlLabel value="Pass" control={<Radio  color="primary" />} label="Pass" />
                                <FormControlLabel value="Fail" control={<Radio />} label="Fail" />

                            </RadioGroup>
                        </FormControl>

                    </div>
                 </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 " >
                        <Button style={{float:"right"}}  clasName="float-right" color="secondary" onClick={this.props.closeDialog}>
                            Close
                        </Button>

                        <Button style={{float:"right"}} clasName="float-right" color="primary" onClick={this.handleSubmitButton}>
                            Submit feed back
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
        feedback : state.feedBackReduicer.feedBack ,
        isGettingPosition: state.feedBackReduicer.isGettingPosition,
        error : state.feedBackReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // feedBack:APIFeedBack.getFeedBack ,

        // postFeedBack:APIFeedBack.postFeedBack,
        feedbackForApplyedPosition:APICandidate.feedbackForApplyedPosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack)








