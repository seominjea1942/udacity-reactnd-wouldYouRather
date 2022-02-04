import { _saveQuestion } from "../utils/_DATA"
export const RECEVIE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export const setQuestions = (questions) => {
    return {
        type: RECEVIE_QUESTIONS,
        questions
    }
}

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleAddQuestion  = (firstOptionText,secondOptionText,authedUser) => {
    return (dispatch)=>{
        return _saveQuestion({
            author: authedUser,
            optionOneText: firstOptionText,
            optionTwoText: secondOptionText
        })
        .then((question)=>{
            dispatch(addQuestion(question))
        })
    }
}