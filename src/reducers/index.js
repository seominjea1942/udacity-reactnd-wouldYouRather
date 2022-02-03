import users from '../reducers/users'
import questions from '../reducers/questions'
import authedUser from '../reducers/authedUser'
import { combineReducers } from 'redux'

export default combineReducers({
    authedUser,
    users,
    questions,
})