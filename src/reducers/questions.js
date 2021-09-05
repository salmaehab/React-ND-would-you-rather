import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER
} from "../actions/questions"

export default function questions(questions = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return {
        ...questions,
        ...action.payload.questions
      }
    }
    case ADD_QUESTION: {
      const { question } = action.payload
      return {
        ...questions,
        [question.id]: question
      }
    }
    case ADD_ANSWER: {
      const { authedUser, qid, answer } = action.payload
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }
    }
    default:
      return questions;
  }
}
