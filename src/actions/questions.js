export const RECEVIE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const setQuestions = (questions) => {
    return {
        type: RECEVIE_QUESTIONS,
        questions
    }
}