import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { Switch, Route, Redirect } from "react-router-dom";
import { handleInitalData } from "../actions/shared";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import QuestionPage from "./QuestionPage";
import NotFoundPage from "./NotFoundPage";
import AddQuestionPage from "./AddQuestionPage";
import LeaderBoardPage from "./LeaderBoardPage";
import NavBar from "./NavBar";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          {authedUser && <NavBar />}
          <div>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <ProtectedRoute exact path="/" component={HomePage} />
              <ProtectedRoute exact path="/add" component={AddQuestionPage} />
              <ProtectedRoute
                exact
                path="/leaderboard"
                component={LeaderBoardPage}
              />
              <ProtectedRoute
                exact
                path="/questions/:id"
                component={QuestionPage}
              />
              
               
              <ProtectedRoute exact path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(({ authedUser }) => ({ authedUser }))(App);
