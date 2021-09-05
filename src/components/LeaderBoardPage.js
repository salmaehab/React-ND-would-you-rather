import React, { Component } from "react";
import { connect } from "react-redux";
import RankCard from "./RankCard";
class LeaderBoardPage extends Component {
  render() {
    return (
      <div>
        {this.props.userIds.map((id, index) => (
          <li key={id}>
            <RankCard id={id} rank={index} />
          </li>
        ))}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
      //sort users based on answered + added questions
    userIds: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        Object.keys(users[b].questions).length -
        (Object.keys(users[a].answers).length +
          Object.keys(users[a].questions).length)
    )
  };
}
export default connect(mapStateToProps)(LeaderBoardPage);
