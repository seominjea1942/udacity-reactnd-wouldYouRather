import { RECEIVE_USERS, UPDATE_USER } from "../actions/users";

const users = (state={}, action) => {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_USER:
            return {
                ...Object.assign(state, action.user)
            }
        default:
            return state
    }
}

export default users