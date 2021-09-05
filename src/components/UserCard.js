import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, BrowserRouter as Router } from "react-router-dom";
class UserCard extends Component {
  state = {
    question: false
  };
  toQuestion = (e, id, activeComponent) => {
    e.preventDefault();

    this.setState(() => ({
      question: true
    }));
  };
  render() {
    console.log(this.props);
    const { avatar, name, id, activeComponent } = this.props;
    const { question } = this.state;

    if (question === true) {
      return (
        <Redirect
          to={{
            pathname: `/questions/${id}`,
            state: {
              activeComponent: activeComponent,
              
            }
          }}
        ></Redirect>
      );
    }
    return (
      <Router>
        <div className="question">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar"></img>
          <p style={{ color: "teal" }} className="center">
            {name} Asks:
          </p>
          <p className="center"> Would You Rather?</p>
          {activeComponent === "unAnsweredQuestions" && (
            <button
              className="btn"
              onClick={(e, id) => {
                this.toQuestion(e, id, activeComponent);
              }}
            >
              View Question
            </button>
          )}

          {activeComponent === "AnsweredQuestions" && (
            <button
              className="btn"
              onClick={(e, id, activeComponent) => {
                this.toQuestion(e, id, activeComponent);
              }}
            >
              View Results
            </button>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props;
  
  const question = questions[id];
  return {
    id,
    authedUser,
    author: question.author,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text,
    votes: [...question.optionOne.votes, ...question.optionTwo.votes],
    votesOptionOne: [...question.optionOne.votes],
    votesOptionTwo: [...question.optionTwo.votes],
    avatar: users[question.author].avatarURL,
    name: users[question.author].name
  };
}

export default connect(mapStateToProps)(UserCard);
