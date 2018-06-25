
import React ,{Component } from 'react';
import Grid from '../common/Grid';
import { connect } from 'react-redux';
import { getArticles } from '../../redux/actions/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';



class DataTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            vacancy: [{id:"5",firstName:"yoyo",lastName:"yasyas"}],
            header: ["Id","Title","Text"],
            headerMapping : ["id" , "title","text"]
        }
    };
    componentDidMount () {
            this.props.getArticles();
            // this.setState({ vacancy: this.state.vacancy });

    };
    render () {
        return (
            <div>
                <h1>vacancy</h1>
                <Grid
                    header={this.state.header}
                    dataset={this.props.articles.articles}
                    headerMapping= {this.state.headerMapping}
                />
            </div>
        );
    }
};

DataTable.propTypes = {
    articles: PropTypes.object
};
function mapStateToProps(state) {
    return { articles : state.articles }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)


