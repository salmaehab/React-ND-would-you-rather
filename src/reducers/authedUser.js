import {SET_AUTHED_USER, DELETE_AUTHED_USER} from '../actions/authedUser'
export default function authedUser(authedUser=null, action){

    switch(action.type){
        case SET_AUTHED_USER:
        {
            const {id} = action.payload
            return id
        }
        case DELETE_AUTHED_USER:{
            return null
        }
        default:
        return authedUser
    }

}