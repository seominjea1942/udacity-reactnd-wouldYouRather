export const RECEVIE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'

export const setQuestions = (questions) => {
    return {
        type: RECEVIE_QUESTIONS,
        questions
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const updateQuestion = (question) => {
    return {
        type: UPDATE_QUESTION,
        question:{
            [question.id]:question
        }
    }
}