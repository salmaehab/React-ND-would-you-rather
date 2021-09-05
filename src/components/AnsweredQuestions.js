import React, { Component } from "react"

import UserCard from "./UserCard"
class AnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <h3 className="center" style={{ color: "royalblue" }}>
          {" "}
          Answered Questions
        </h3>
        <ul className="home-list">
          {this.props.answerIds.map(id => (
            <li key={id}>
              <UserCard id={id} activeComponent={this.props.activeComponent} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnsweredQuestions
