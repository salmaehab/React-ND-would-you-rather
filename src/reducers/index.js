import { combineReducers } from 'redux'
// import {persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import {loadingBarReducer} from 'react-redux-loading'

// const persistConfig ={
//     key: 'root',
//     storage,
//     whitelist: ['authedUser'],
// }

const rootReducer= combineReducers({
    authedUser,
    users, 
    questions,
    loadingBar: loadingBarReducer
})

//export default persistReducer(persistConfig, rootReducer)
export default rootReducer