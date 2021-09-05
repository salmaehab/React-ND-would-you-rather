import React, { Component } from "react";
import { connect } from "react-redux";
class RankCard extends Component {
  render() {
    const { name, avatar, answerCount, questionCount } = this.props;
    return (
      <div>
        <p
          className="rank"
          style={{
            backgroundColor: "skyblue",
            textAlign: "center",
            color: "navy"
          }}
        >
          {this.props.rank + 1}
        </p>
        <div className="question">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar"></img>
          <p className="score" style={{ fontWeight: "bold" }}>
            {name}
          </p>
        </div>
        <div className="rank">
          <p>Score: {answerCount + questionCount}</p>
        </div>
        <div className="question">
          <p>Answered Questions: {answerCount}</p>
        </div>
        <div className="question">
          <p>Created Question: {questionCount}</p>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }, props) {
  const { id } = props;
  const user = users[id];
  return {
    id,
    name: user.name,
    avatar: user.avatarURL,
    answerCount: Object.keys(user.answers).length,
    questionCount: Object.keys(user.questions).length
  };
}
export default connect(mapStateToProps)(RankCard);
