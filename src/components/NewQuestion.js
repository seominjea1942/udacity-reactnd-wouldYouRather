import React,{ useState } from 'react';
import { connect } from 'react-redux'
import {hanadleCreateNewQuestion} from '../actions/shared'
import { useNavigate } from 'react-router-dom'

function NewQuestion({dispatch, users, questions, authedUser}) {
    const [firstOptionText , setFirstOptionText] = useState('')
    const [secondOptionText , setSecondOptionText] = useState('')
    const navigate = useNavigate();

    const getTextInputValue = (e) => {
        if(e.target.id === 'firstOption'){
            setFirstOptionText(e.target.value)
        } else {
            setSecondOptionText(e.target.value)
        }
    }
    const handleQuestionSubmit =(e)=>{
        dispatch(hanadleCreateNewQuestion(firstOptionText,secondOptionText,authedUser))
        setFirstOptionText('')
        setSecondOptionText('')
        navigate('/')
    }
    return (
        <div>
            <div>
                <h1>Create New Question</h1>
            </div>
            <div>
                <p>Complete the question:</p>
                <h2>Would you rather...</h2>
                <input
                id="firstOption"
                type="text"
                placeholder='Enter Option One Text Here'
                onChange={getTextInputValue}
                value={firstOptionText}
                />
                <div>
                    <h3>OR</h3>
                    <hr />
                </div>
                <input
                id="secondOption"
                type="text"
                placeholder='Enter Option Two Text Here'
                onChange={getTextInputValue}
                value={secondOptionText}
                />
                <button
                onClick={handleQuestionSubmit}
                >Submit</button>
            </div>
        </div>
    );
}

const mapStateToProps =({users, questions, authedUser})=>{
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)