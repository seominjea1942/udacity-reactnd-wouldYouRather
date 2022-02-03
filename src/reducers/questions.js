import { RECEVIE_QUESTIONS } from "../actions/questions";

const questions = (state={}, action) => {
    switch(action.type){
        case RECEVIE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}

export default questions