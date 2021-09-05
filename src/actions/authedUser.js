export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const DELETE_AUTHED_USER = 'DELETE_AUTHED_USER'
//set authed user when he log in
export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        payload: {id}
    }
}
//remove user when he log out
export function deleteAuthedUser(){
    return{
        type: DELETE_AUTHED_USER,
    }
}