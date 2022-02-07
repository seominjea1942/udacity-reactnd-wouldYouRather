import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import QuestionCard from './QuestionCard';

function Home({dispatch, questions, users, authedUser}) {
    const ANSWERED_QUESTIONS = 'ANSWERED_QUESTIONS'
    const UNANSWERED_QUESTIONS = 'UNANSWERED_QUESTIONS'
    const [unansweredQuestions,setUnansweredQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [activeTab, setActiveTab] = useState(UNANSWERED_QUESTIONS);

    const handleActiveTab = (e,whichTabActive) => {
        setActiveTab(whichTabActive)
    }

    useEffect(()=>{
        const tempUnAnsweredQuestions = []
        const tempAnsweredQuestions = []
        Object.keys(questions).forEach((key)=>{
            if(questions[key].optionOne.votes.includes(authedUser)||
            questions[key].optionTwo.votes.includes(authedUser)){
                tempAnsweredQuestions.push(questions[key])
            } else {
                tempUnAnsweredQuestions.push(questions[key])
            }
        })        
        setAnsweredQuestions(tempAnsweredQuestions.sort((a,b)=>(b.timestamp-a.timestamp)))
        setUnansweredQuestions(tempUnAnsweredQuestions.sort((a,b)=>(b.timestamp-a.timestamp)))
    },[questions])
    return (
        <div className='grayOutlinedContainer'>
            <div className="tabs">
                <button className={`homeTab ${activeTab===ANSWERED_QUESTIONS?'inactive':'active'}`} onClick={(e)=>handleActiveTab(e,UNANSWERED_QUESTIONS)}>Unanswered Questions</button>
                <button className={`homeTab ${activeTab===ANSWERED_QUESTIONS?'active':'inactive'}`} onClick={(e)=>handleActiveTab(e,ANSWERED_QUESTIONS)}>Answered Questions</button>
            </div>
            <div>
            {(activeTab === ANSWERED_QUESTIONS)?
            answeredQuestions.map((answeredQuestion)=>(
                <QuestionCard key={answeredQuestion.id} question={answeredQuestion}/>
            ))
            :
            unansweredQuestions.map((unansweredQuestion)=>(
                <QuestionCard key={unansweredQuestion.id} question={unansweredQuestion}/>
            ))
            }
            </div>
        </div>
    );
}

const mapStateToProps=({questions, users, authedUser})=>{
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);