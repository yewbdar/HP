import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from './../redux/actions/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


class ArticleView extends Component {
    componentDidMount() {
        //after component loads bring data
        this.props.getArticles();
     }
    render() {
        return (
                <div>
                    {/* this is for displaying data in Pretty format of json , WE CANT show Object in one JSX Node*/}
                    <pre>{JSON.stringify(this.props.articles, null, 2) }</pre>
                </div>
        );
    }
}

ArticleView.propTypes = {
    articles: PropTypes.object
};
function mapStateToProps(state) {
    return { articles : state.articles }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)
