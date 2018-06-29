import React ,{Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { getArticles } from '../../redux/actions';
import Grid  from '../common/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import DatePicker from 'material-ui/DatePicker'
// import TimePicker from 'material-ui/TimePicker';

class  CandidateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtFirstName:"",
            txtLastName:"",
            txtDOB:"",
            txtImage:"",
            txtResume:"",
            txtCoverPage:"",


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
                            id="firstName"
                            label="First Name"
                            value={this.state.txtFirstName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtFirstName"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 align-self-end" >
                        <TextField
                            id="lastName"
                            label="Last Name"
                            value={this.state.txtLastName}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtLastName"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="DOB"
                            label="DOB"
                            value={this.state.txtDOB}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtDOB"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="image"
                            label="Image"
                            value={this.state.txtImage}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtImage"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="resume"
                            label="Resume"
                            value={this.state.txtResume}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtResume"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <TextField
                            id="coverPage"
                            label="Cover Page(Optional)"
                            value={this.state.txtCoverPage}
                            onChange={this.handleChange}
                            margin="normal"
                            name="txtCoverPage"
                            fullWidth
                        /> </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 col-md-6 col-sm-12" >
                        <Button variant="outlined" color="primary" >
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

export default CandidateProfile;







