import React, { Component } from 'react';
import { connect } from 'react-redux';
import  candidateActions  from '../../redux/actions/candidateActions';
import { bindActionCreators } from 'redux';
import Grid from '../../components/common/Grid';
class ViewFeedBack extends Component {
    constructor(props){
        super(props);
        this.state = {
            candidateId:"5b444d07ec17bf3308573e53",
            candidate:[],
            candidatesParsed: []
        }
    };

    componentDidMount() {
        //after component loads bring data
        this.props.getAppliedPositionsStatusForCandidate(this.state.candidateId);
        this.setState({candidate:JSON.stringify(this.props.candidate)})
    };

    handleAction=(event) =>{


    };

    render() {
        return (
            <div>
                {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                {/*<pre>{JSON.stringify(this.props.candidateAppliedPositionsStatus, null, 2) }</pre>*/}

                <Grid
                    dataset={this.props.candidateAppliedPositionsStatus}
                    header={["Full Name","Applied Position ","Interview Type", "Result" , "Comment", "Action"]}
                    headerMapping={["lastFirstName","positionTitle", "interviewType", "result","comment" ]}
                    actionNames={["View Comment"]}
                    handleAction = {this.handleAction}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // positions : state.positionReduicer.position,
        candidateAppliedPositionsStatus : state.candidateReduicer.candidateAppliedPositionsStatus ,
        isGettingCandidateStatus: state.candidateReduicer.isGettingCandidateStatus,
        error : state.candidateReduicer.error
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAppliedPositionsStatusForCandidate:candidateActions.getAppliedPositionsStatusForCandidate,

        // getPositions:APIPosition.getActivePosition
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFeedBack)

