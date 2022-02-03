import {setUsers} from '../actions/users'
import { setQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { _getUsers } from '../utils/_DATA'
import { _getQuestions } from '../utils/_DATA'

const authedId = 'sarahedo'

export const handleUserData = () => {
    return (dispatch) =>{
        return Promise.all([
            _getUsers(),
            _getQuestions()
        ])
        .then((data)=>{
            const usersData = data[0]
            const questionsData = data[1]
            dispatch(setAuthedUser(authedId))
            dispatch(setUsers(usersData))
            dispatch(setQuestions(questionsData))
        })
    }
}