import React, { Component } from 'react';
import { connect } from 'react-redux';
import  getCandid  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import FeedBack from '../../components/recruiter/FeedBack';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import  APIPostion  from '../../redux/actions/positionActions';
import TextField from '@material-ui/core/TextField';


class ViewCandidats extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCandidateId:"",
            selectedCandidateFullName:"",
            selectedCandidateAppliedPositions:[],
            open: false,
        }
    };

    handleGiveFeedback = (candidateId) => {

        this.setState({ open: true });
        console.log(candidateId);
        let candidate = this.props.candidates.find(function(element){return element._id === candidateId})
        // let position = this.props.getPositions.find(function(element){return element._id === candidate.appliedPositions})

        this.setState({
            selectedCandidateId:candidate._id,
            selectedCandidateFullName:candidate.lastName + ", "  + candidate.firstName,
            selectedCandidateAppliedPositions:candidate.appliedPositions

        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        //after component loads bring data
        this.props.getCandidates();
    }
    handleOpen=(articleId)=>{
        console.log(articleId);
    };
    // handleGiveFeedback=(data)=>{
    //     console.log(data);
    //    // return( <FeedBack/>)
    // };
    handleviewdetail=(data)=>{
        console.log(data);
        // return( <FeedBack/>)
    };
    handleAction=(event) =>{
        let clicked = event.target.getAttribute("name");
        let articleId = event.target.getAttribute("data-article-id");
        switch (clicked) {
            case "Give Feedback" :
                this.handleGiveFeedback(articleId);
                break;
            case "view detail" :
                this.handleviewdetail(articleId);
                break;
            default :
                break;
        };

    }

    render() {
        return (
            <div>
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                {/*<pre>{JSON.stringify(this.props.candidates, null, 2) }</pre>*/}
                <Grid
                    dataset={this.props.candidates}
                    header={["ID#","first Name","Last Name","Gender","DOB","Action"]}
                    headerMapping={["_id","firstName","lastName","gender","dob",]}
                    actionNames={["View Detail","Give Feedback"]}
                    handleAction = {this.handleAction}
                />


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                        <FeedBack
                            id = {this.state.selectedCandidateId}
                            fullName = {this.state.selectedCandidateFullName}
                            positions = {this.state.selectedCandidateAppliedPositions}
                            closeDialog = {this.handleClose}

                        />
                    </DialogContent>

                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        positions : state.positionReduicer.position,
        candidates : state.candidateReduicer.candidates ,
        isGettingCandidates: state.candidateReduicer.isGettingCandidates,
        error : state.candidateReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCandidates:getCandid.getCandidates,
        getPositions:APIPostion.getPositions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidats)
