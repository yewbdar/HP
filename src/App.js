import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ArticleView from './components/ArticleView'
import Vacancy from './components/recruiter/Vacancy'
import FeedBack from './components/recruiter/FeedBack'
import ViewCandidats from './components/recruiter/ViewCandidats'
import ViewVacancy from './components/recruiter/ViewVacancy'
import CandidateProfile from './components/candidate/CandidateProfile'
import ViewOpenVacancy from './components/candidate/viewOpenVacancy'
import EmpViewCandidate from './components/employee/ViewCandidate'
import ViewFeedBack from './components/candidate/ViewFeedBack'

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/articleview/" component={ArticleView} />
                    <Route path="/Vacancy" component={Vacancy} />
                    <Route path="/FeedBack" component={FeedBack} />
                    <Route path="/ViewCandidats" component={ViewCandidats} />
                    <Route path="/ViewVacancy" component={ViewVacancy} />
                    <Route path="/CandidateProfile" component={CandidateProfile} />
                    <Route path="/ViewOpenVacancy" component={ViewOpenVacancy} />
                    <Route path="/ViewFeedBack" component={ViewFeedBack} />
                    <Route path="/empViewCandidate" component={EmpViewCandidate} />

                    <Route path="**" component={ArticleView} />
                </Switch>
            </div>
        );
    }
}

export default App;