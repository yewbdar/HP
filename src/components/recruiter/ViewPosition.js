import React, { Component } from 'react';
import { connect } from 'react-redux';
 import  APIVacancy  from '../../redux/actions/positionActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ViewPosition extends Component {
    componentDidMount() {
        //after component loads bring data
         this.props.getPosition();
        // APIVacancy.getPosition();
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

    }
    notify = (message) => toast(message);

    render() {
        return (
            <div>
                <div className='errorMsgs'>
                    <ToastContainer />
                </div>

                { this.props.isGettingPosition && <LinearProgress />}
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                {/*<pre>{JSON.stringify(this.props.vacancy, null, 2) }</pre>*/}
                <Grid

                    dataset={this.props.position}
                    header={["ID", "Title","Skill","Summary","Active","Action"]}
                    headerMapping={["_id","title","skill","summary","isActive"]}
                    actionNames={["Open","Download"]}
                    handleAction = {this.handleAction}

                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      position : state.positionReduicer.position ,
      isGettingPosition: state.positionReduicer.isGettingPosition,
      error : state.positionReduicer.error
        }
}
function mapDispatchToProps(dispatch) {
     return bindActionCreators({ getPosition:APIVacancy.getPosition}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPosition)
