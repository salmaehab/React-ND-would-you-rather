import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

const HomePage = props => {
  const [activeComponent, setActiveComponent] = useState("unAnsweredQuestions")
  //to let user alternate between answered and unanswered components  
  const modifyActiveComponent = useCallback(
    newActiveComponent => {
      setActiveComponent(newActiveComponent)
    },
    [setActiveComponent]
  );
  const { questionIds, answerIds } = props;
  console.log(props);
  var difference = questionIds.filter(x => !answerIds.includes(x))
  return (
    <div>
      <h3 className="center" style={{ color: "purple" }}>
        {" "}
        Your Questions
      </h3>
      <ul className="toggle-questions">
        <li
          className="li-hover"
          onClick={() => modifyActiveComponent("unAnsweredQuestions")}
        >
          UnAnswered Questions
        </li>
        <li
          className="li-hover"
          onClick={() => modifyActiveComponent("AnsweredQuestions")}
        >
          Answered Questions
        </li>
      </ul>
      {activeComponent === "AnsweredQuestions" && (
        <AnsweredQuestions
          answerIds={answerIds}
          activeComponent={activeComponent}
        />
      )}
      {activeComponent === "unAnsweredQuestions" && (
        <UnAnsweredQuestions
          questionIds={difference}
          activeComponent={activeComponent}
        />
      )}
    </div>
  );
};

//  class HomePage extends Component {
//     render() {
//         console.log(this.props)
//         var difference = this.props.questionIds.filter(x => !this.props.answerIds.includes(x));
//         return (
//             <div>
//                <h3 className="center" style={{color: 'purple'}}> Your Questions</h3>
//                <AnsweredQuestions answerIds={this.props.answerIds}/>
//                <UnAnsweredQuestions questionIds={difference}/>

//             </div>
//         )
//     }
// }

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    answerIds: Object.keys(user.answers)
  };
}

export default connect(mapStateToProps)(HomePage);
