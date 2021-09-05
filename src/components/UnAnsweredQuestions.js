import React, { Component } from "react";

import UserCard from "./UserCard";
class UnAnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <h3 className="center" style={{ color: "royalblue" }}>
          {" "}
          UnAnswered Questions
        </h3>
        <ul className="home-list">
          {this.props.questionIds.map(id => (
            <li key={id}>
              <UserCard id={id} activeComponent={this.props.activeComponent} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UnAnsweredQuestions;
