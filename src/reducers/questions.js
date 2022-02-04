import { RECEVIE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION } from "../actions/questions";

const questions = (state={}, action) => {
    switch(action.type){
        case RECEVIE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const {question} = action
            return {
                ...state,
                [question.id]: question
            }

        default:
            return state
    }
}

export default questions