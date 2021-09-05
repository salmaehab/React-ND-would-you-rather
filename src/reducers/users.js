import { RECEIVE_USERS } from "../actions/users";
import { ADD_USER_QUESTION, ADD_USER_ANSWER } from "../actions/questions";
export default function users(users = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...users,
        ...action.payload.users
      }
    }
    case ADD_USER_QUESTION: {
      const { qid, authedUser } = action.payload;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([qid])
        }
      }
    }
    case ADD_USER_ANSWER: {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: { ...users[authedUser].answers, [qid]: answer }
        }
      }
    }
    default:
      return users
  }
}
