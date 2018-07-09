import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../redux/actions/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '../../components/common/Grid';
import  APIPostion  from '../../redux/actions/positionActions';

class ViewOpenPosition extends Component {
    constructor () {
        super();
        this.state ={
            newPosition:[]
        }
    }

    componentDidMount() {
        //after component loads bring data

        this.props.getActivePosition();
    }
    handleApply=(positionId)=>{
        console.log(positionId);
        this.props.updatePosition({
            id:"5b3d05ef54cd7218c6064b79",
            position: positionId
        })
    }

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
    filterActivePositions=()=>{
        this.setState({newPosition: this.props.positions.filter((ele)=>{ ele.isActive === true; }) });
    };

    render() {
        return (
            <div>
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                {/*<pre>{JSON.stringify(this.props.positions , null, 2) }</pre>*/}
                <Grid
                    dataset={this.props.positions}


                    header={["Title","Skill","Summary","Action"]}
                    headerMapping={["title","skill","summary"]}
                    actionNames={["Apply","View detail"]}
                    handleAction = {this.handleAction}

                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        positions:state.positionReduicer.position,
        isGettingPosition: state.positionReduicer.isGettingPosition,
        error : state.positionReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getActivePosition:APIPostion.getActivePosition,
        updatePosition:APIPostion.updatePosition
       }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOpenPosition)
