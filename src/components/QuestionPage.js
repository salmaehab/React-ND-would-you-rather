import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import {BrowserRouter as Router} from 'react-router-dom'
class QuestionPage extends Component {
  state = {
    show: false
  };
  render() {
    const {
      avatar,
      name,
      optionOne,
      optionTwo,
      id,
      authedUser,
      votesOptionOne,
      votesOptionTwo,
      votes, findingError
    } = this.props;
    var { activeComponent } = this.props.location.state || {activeComponent:'unAnsweredQuestions'};
    if(findingError)
    {
    return (  <div>
        <div className="notfound">
          <h2 className="shadow">404</h2>
          <h4 className="ops">OOPS! page is not found</h4>
          <p className="center">
            The page you are looking for doesn't exist. Please check the address
            again
          </p>
          <br />
        </div>
      </div>
    )
    }
    return (
      <Router>
      <div>
      {/* show question options for unanswered questions */}
        {activeComponent === "unAnsweredQuestions" && (
          <div className="question">
            <img
              src={avatar}
              alt={`Avatar of ${name}`}
              className="avatar"
            ></img>
            <div>
              <p style={{ color: "teal" }} className="center">
                {name} Asks:
              </p>
              <p style={{fontWeight: 'bold'}} className="center"> Would You Rather?</p>
              <select
                style={{ color: "#0066ff", width: "100%"}}
                value="null"
                onChange={e => {
                  e.preventDefault();
                  this.props.dispatch(
                    handleAddAnswer({
                      authedUser: authedUser,
                      qid: id,
                      answer: e.target.value
                    })
                  );
                  this.setState({ show: true });
                }}
              >
                <option value="null" disabled>
                  Options
                </option>
                <option value="optionOne">{optionOne}</option>
                <option value="optionTwo">{optionTwo}</option>
              </select>
            </div>
          </div>
        )}

        {/* show results for answers for answered questions */}
        {(activeComponent === "AnsweredQuestions" ||
          this.state.show === true) && (
          <div>
            <h3 className="center">Results</h3>
            <br />
            <div className="result" style={{ backgroundColor: "#ffe5ff" }}>
              <div style={{ color: "red" }}>
                {votesOptionOne.includes(authedUser) && <p>Your Answer</p>}
              </div>
              <p>Would you rather {optionOne}</p>

              <div>
                <p>
                  number of votes for this option: {votesOptionOne.length} out
                  of {votes.length} votes
                </p>
              </div>
              <div>
                <p>
                  percentage of votes for this option:{" "}
                  {Number.isInteger(
                    (votesOptionOne.length / votes.length) * 100
                  )
                    ? (votesOptionOne.length / votes.length) * 100
                    : (
                        Math.round(
                          (votesOptionOne.length / votes.length) * 100 * 100
                        ) / 100
                      ).toFixed(2)}{" "}
                  %
                </p>
              </div>
            </div>
            <div className="center" style={{ position: "relative" }}>
              <br />
              OR
            </div>
            <br />
            {/* option Two */}
            <div className="result" style={{ backgroundColor: "azure" }}>
              <div style={{ color: "blue" }}>
                {votesOptionTwo.includes(authedUser) && <p>Your Answer</p>}
              </div>
              <p>Would you rather {optionTwo}</p>

              <div>
                <p>
                  number of votes for this option: {votesOptionTwo.length} out
                  of {votes.length} votes
                </p>
              </div>
              <div>
                <p>
                  percentage of votes for this option:{" "}
                  {Number.isInteger(
                    (votesOptionTwo.length / votes.length) * 100
                  )
                    ? (votesOptionTwo.length / votes.length) * 100
                    : (
                        Math.round(
                          (votesOptionTwo.length / votes.length) * 100 * 100
                        ) / 100
                      ).toFixed(2)}{" "}
                  %
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
 const question = questions[id];
  if(question === undefined)
  {
    const findingError = true
    return {findingError}
  }
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
export default connect(mapStateToProps)(QuestionPage);
