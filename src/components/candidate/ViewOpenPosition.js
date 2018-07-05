import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../redux/actions/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import  APIPostion  from '../../redux/actions/positionActions';

class ViewOpenPosition extends Component {
    componentDidMount() {
        //after component loads bring data
        this.props.getPosition();
    }
    handleApply=(positionId)=>{
        console.log(positionId);
    };

    handleViewdetail=(positionId)=>{
        console.log(positionId);
    }
    handleAction=(event) =>{
        let clicked = event.target.getAttribute("name");
        let positionId = event.target.getAttribute("data-article-id");
        switch (clicked) {
            case "Apply" :
                this.handleApply(positionId);
                break;
            case "View detail" :
                this.handleViewdetail(positionId);
                break;
            default :
                break;
        };

    }

    render() {
        return (
            <div>
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                <pre>{JSON.stringify(this.props.positions , null, 2) }</pre>
                {/*<Grid
                    dataset={this.props.position}
                    header={["ID#","Title","Text","Action"]}
                    headerMapping={["id","title","text"]}
                    actionNames={["Apply,"View detail"]}
                    handleAction = {this.handleAction}

                />*/}
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
    return bindActionCreators({ getPosition:APIPostion.getPosition
       }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOpenPosition)
