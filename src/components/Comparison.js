import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import ComparisonBar from './ComparisonBar';

function Comparison({dispatch, authedUser, questions, isThisAnswered}) {
    const [totalVote, setTotalVote] = useState(0)
    const { question_id } = useParams();
//selectedOptionBox
    useEffect(()=>{
        setTotalVote(questions[question_id].optionOne.votes.length + questions[question_id].optionTwo.votes.length)
    },[questions,question_id, isThisAnswered])
    return (
        <div>
            <h1>Results:</h1>
            <div className={(questions[question_id].optionOne.votes.includes(authedUser))?'selectedOptionBox':'unSelectedOptionBox'}>
                <p>{(questions[question_id].optionOne.votes.includes(authedUser))?'Your Vote':null}</p>
                <h2>{`Would you rather ${questions[question_id].optionOne.text}`}</h2>
                <ComparisonBar totalVote={totalVote} numVote={questions[question_id].optionOne.votes.length}/>
            </div>
            <div className={(questions[question_id].optionTwo.votes.includes(authedUser))?'selectedOptionBox':'unSelectedOptionBox'}>
            <p>{(questions[question_id].optionTwo.votes.includes(authedUser))?'Your Vote':null}</p>
                <h2>{`Would you rather ${questions[question_id].optionTwo.text}`}</h2>
                <ComparisonBar totalVote={totalVote} numVote={questions[question_id].optionTwo.votes.length}/>
            </div>
        </div>
    );
}

const mapStateToProps= ({authedUser, questions})=>{
    return {
        authedUser,
        questions
    }
}
export default connect(mapStateToProps)(Comparison);