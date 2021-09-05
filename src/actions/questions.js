import {showLoading, hideLoading} from 'react-redux-loading'
import {_saveQuestion, _saveQuestionAnswer} from '../_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
//ro receive Questions from database
export function receiveQuestions (questions){
    return{
        type: RECEIVE_QUESTIONS,
        payload:{questions}
    }
}
//add question to the questions slice of state
 function addQuestion(question){
    return{
        type: ADD_QUESTION,
        payload:{question}
    }
}
//add question to the users slice of state
export function addUserQuestion({qid, authedUser}){
    return{
        type: ADD_USER_QUESTION,
        payload:{qid, authedUser}
    }
}
//async action creator to save question to API and to questions andd users state
export function handleAddQuestion ({optionOneText, optionTwoText, author}){
    return (dispatch)=>{
        dispatch(showLoading())
        return _saveQuestion({optionOneText, optionTwoText, author})
        .then((question)=>{
            dispatch(addQuestion(question))
            dispatch(addUserQuestion({qid: question.id, authedUser: author}))
            dispatch(hideLoading())
        })
    }
}



//add answer to the questions slice of state
export function addAnswer({ authedUser, qid, answer }){
    return{
        type: ADD_ANSWER,
        payload:{ authedUser, qid, answer }
    }
}
//add answer to the users slice of state
export function addUserAnswer({ authedUser, qid, answer }){
    return{
        type: ADD_USER_ANSWER,
        payload:{ authedUser, qid, answer }
    }
}


//async action creator to save question to API and to questions andd users state
export function handleAddAnswer ({ authedUser, qid, answer }){
    return (dispatch)=>{
        dispatch(showLoading())
        return  _saveQuestionAnswer ({ authedUser, qid, answer })
        .then(()=>{
            dispatch(addAnswer({ authedUser, qid, answer}))
            dispatch(addUserAnswer({ authedUser, qid, answer }))
            dispatch(hideLoading())
        })
    }
}



