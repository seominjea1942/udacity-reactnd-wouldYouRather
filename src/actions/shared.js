import {setUsers} from '../actions/users'
import { setQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { _getUsers } from '../utils/_DATA'
import { _getQuestions } from '../utils/_DATA'
import { _saveQuestion } from '../utils/_DATA'
import { addQuestion } from './questions'
import { updateUser } from '../actions/users'
import {_saveQuestionAnswer} from '../utils/_DATA'
import { updateQuestion } from './questions'

const authedId = ''

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

export const hanadleCreateNewQuestion = (firstOptionText,secondOptionText,authedUser) => {
        return (dispatch)=>{
            return _saveQuestion({
                author: authedUser,
                optionOneText: firstOptionText,
                optionTwoText: secondOptionText
            })
            .then(([question, user])=>{
                dispatch(addQuestion(question))
                dispatch(updateUser(user))
                
            })
        }
}

export const handleAnsweredQuestion = (authedUser,qid,answer) => {
    //authedUser, qid, answer
    return (dispatch) => {
        return _saveQuestionAnswer ({
            authedUser,
            qid,
            answer,
        }).then(([question,user])=>{
            dispatch(updateQuestion(question))
            dispatch(updateUser(user))
        })
    }
}