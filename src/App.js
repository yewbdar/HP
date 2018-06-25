import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ArticleView from './components/ArticleView'
import Form from './components/recruiter/Form'
import DataTable from './components/recruiter/DataTable'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/articleview/" component={ArticleView} />
                    <Route path="/addform" component={Form} />
                    <Route path="/table" component={DataTable} />
                    <Route path="**" component={ArticleView} />
                </Switch>
            </div>
        );
    }
}

export default App;