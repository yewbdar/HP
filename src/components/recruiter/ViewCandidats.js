import React, { Component } from 'react';
import { connect } from 'react-redux';
import  getCandid  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import FeedBack from '../../components/recruiter/FeedBack';

class ViewCandidats extends Component {
    componentDidMount() {
        //after component loads bring data
         this.props.getCandidates();
    }
    handleOpen=(articleId)=>{
        console.log(articleId);
    };
    handleGiveFeedback=(data)=>{
        console.log(data);
       // return( <FeedBack/>)
    };
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
                    header={["ID#","first Name","last Name","DOB","Action"]}
                    headerMapping={["_id","firstName","lastName","dob"]}
                    actionNames={["view detail","Give Feedback"]}
                    handleAction = {this.handleAction}

                />
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
    return bindActionCreators({ getCandidates:getCandid.getCandidates
       }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidats)
