import React ,{Component } from 'react';
import ReactDOM from 'react-dom';
import addButton from '../common/Button';
import DataTable from './Vacancy'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
// import { getArticles } from '../../redux/actions';
import Grid  from '../common/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class  FeedBack extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtInterview:"",
            txtCandidateName:"",
            txtHub:"",
            txtInterviewSchedule:"",
            txtFeedBack:"",


            article:{},
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

    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="interview"
                            label="Interview#"
                            value={this.state.txtInterview}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtInterview"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 align-self-end" >
                        <TextField
                            id="candidateName"
                            label="Candidate Name"
                            value={this.state.txtCandidateName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtCandidateName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="hub"
                            label="Hub"
                            value={this.state.txtHub}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtHub"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="feedBack"
                            label="Feed Back"
                            value={this.state.txtFeedBack}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtFeedBack"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >

                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Pass" />
                            <FormControlLabel value="male" control={<Radio />} label="Fail" />

                        </RadioGroup>

                    </div>
                 </div>
                <div className="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" >
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

export default FeedBack;







