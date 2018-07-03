import React, { Component } from 'react';
import { connect } from 'react-redux';
 import  APIPostion  from '../../redux/actions/positionActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ViewPosition extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataForUpdate: {
                open: "Open",
                "isActive": "",
                _id: ""
            }
        };

    }
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
    handleOpen = (articleId) => {

                this.props.updatePosition({  id : articleId ,
                                             isActive : true
                                           });

    };
    handleClose=(articleId)=>{
        this.props.updatePosition({ id : articleId ,
            isActive : false
        });

    };

    handleUpdate=(event)=>{
        let item = this.props.positions.find(function(element){return element._id === event})

        this.props.handleEdit(item);


    };
    handleRemove=(event)=>{

    };
    handleAction=(event) =>{
        let clicked = event.target.getAttribute("name");
        let postionId = event.target.getAttribute("data-article-id");
        switch (clicked) {
            case "Open" :
                this.handleOpen(postionId);
                break;
            case "Close" :
                this.handleClose(postionId);
                break;
            case "Update":
                this.handleUpdate(postionId);
                break;
            case "Remove":
                this.handleRemove(postionId);
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
                {/*<pre>{JSON.stringify(this.props.position, null, 2) }</pre>*/}
                <Grid
                    dataset={this.props.positions.map(positionItem => {
                          positionItem.isActive = positionItem.isActive === true ? "Yes" : "No";
                          if (positionItem.hasOwnProperty("qualifications")  ) {
                              positionItem.qualificationNames = positionItem.qualifications.map(qualification => {
                                  return qualification.name;
                              }).join(", ");
                          } else {
                              positionItem.qualificationNames = "N/A"
                          }
                        return (positionItem);
                    })}
                    header={["ID", "Title","Skill","Qualifications","Summary","Active","Action"]}
                    headerMapping={["_id","title","skill","qualificationNames","summary","isActive"]}
                    actionNames={["Open","Close","Update","Remove"]}
                    handleAction = {this.handleAction}

                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      positions : state.positionReduicer.position ,
      isGettingPosition: state.positionReduicer.isGettingPosition,
      error : state.positionReduicer.error
        }
}
function mapDispatchToProps(dispatch) {
     return bindActionCreators({ getPosition:APIPostion.getPosition,
                                  updatePosition:APIPostion.updatePosition}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPosition)
