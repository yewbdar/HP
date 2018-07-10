import React, { Component } from 'react';
import { connect } from 'react-redux';
import  getCandid  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import Grid from '../../components/common/Grid';
class ViewFeedBack extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidateId:"5b444d07ec17bf3308573e53",
        }
    };

    componentDidMount() {
        //after component loads bring data
         this.props.getCandidate(this.state.candidateId);

    };

    handleAction=(event) =>{


    };

    render() {
        return (
            <div>
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                <pre>{JSON.stringify(this.props.candidate, null, 2) }</pre>

                 <Grid
                    dataset={this.props.candidate}
                    header={["first Name","Last Name","Action"]}
                    headerMapping={["firstName","lastName"]}
                    actionNames={["view Detail"]}
                    handleAction = {this.handleAction}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // positions : state.positionReduicer.position,
        candidate : state.candidateReduicer.candidates ,
        isGettingCandidates: state.candidateReduicer.isGettingCandidates,
        error : state.candidateReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCandidate:getCandid.getById,

        // getPositions:APIPosition.getActivePosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFeedBack)
