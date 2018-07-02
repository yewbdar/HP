import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ViewCandidate extends Component {
    componentDidMount() {
        //after component loads bring data
        this.props.getCandidates();


    }
    componentWillReceiveProps(nextProps){

        if (nextProps.error !== this.props.error) {
             this.notify(nextProps.error);
         }
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
    notify = (message) => toast(message);

    render() {
        return (
            <div>
                <div className='errorMsgs'>
                    <ToastContainer />
                </div>

                { this.props.isGettingCandidates && <LinearProgress />}
                <Grid 
                    dataset={this.props.candidates} 
                    header={["ID#","First Name","Last Name","Date of Birth","Action"]} 
                    headerMapping={["candidateId","firstName","lastName","dob"]} 
                    actionNames={["view"]} 
                    handleAction = {this.handleAction}  
                />

                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                {/*<pre>{JSON.stringify(this.props.candidates, null, 2) }</pre>*/}
                {/*{this.props}*/}
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        candidates : state.candidateReduicer.candidates ,
        isGettingCandidates: state.candidateReduicer.isGettingCandidates,
        error : state.candidateReduicer.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCandidates }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidate)
