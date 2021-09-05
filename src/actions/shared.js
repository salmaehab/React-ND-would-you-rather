import {showLoading, hideLoading} from 'react-redux-loading'
import {getInitalData} from '../_DATA'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'


//async action creator to receive questions and users from API
export function handleInitalData(){
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitalData()
        .then(({users, questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))          
            dispatch(hideLoading())
        })
    }
}