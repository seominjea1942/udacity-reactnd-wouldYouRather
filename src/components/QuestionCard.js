import React, {useState, useEffect} from 'react';
import ProfilePhoto from './ProfilePhoto';
import {connect} from 'react-redux'
import {useParams, Link, useNavigate} from 'react-router-dom'
import { handleAnsweredQuestion } from '../actions/shared'
import PollForm from './PollForm';
import Comparison from './Comparison';

function QuestionCard({question, dispatch, users, questions, authedUser}) {
    const [item, setItem] = useState({})
    const [selectedOption, setSelectedOption] = useState('optionOne')
    const [isThisAnswered, setIsThisAnswered] = useState(false)
    let { question_id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        setIsThisAnswered(true)
        dispatch(handleAnsweredQuestion(authedUser, item.id, selectedOption))
    }

    const checkAnswered = (question) => {
        if(item !== undefined || JSON.stringify(item)!=='{}'){
            if(!Object.keys(questions).includes(question_id) && question_id !== undefined){
                navigate('/404')
            } else {
            setIsThisAnswered( question.optionTwo.votes.includes(authedUser) || question.optionOne.votes.includes(authedUser))
            }
        } 
    }

    const handleSelection = (e) => {
        setSelectedOption(e.target.id)
    }
    useEffect(()=>{
        if(question === undefined && questions !== undefined && JSON.stringify(questions)!=='{}'){
            setItem(questions[question_id])
            checkAnswered(questions[question_id])
        }
        if(question !== undefined && JSON.stringify(questions)!=='{}'){
            setItem(question)
            checkAnswered(question)
        }
    },[question, questions, question_id])

    return (
        <div className='questionContainer'>
            {(item!==undefined && JSON.stringify(item)!=='{}')?
            <>
            <div className='questionConatinerHeader'>
                <h3>{users[item.author].name}</h3>
            </div>
            <div className='questionContainerBody'>
                <div className='questionContainerPhoto'>
                <ProfilePhoto
                size={100}
                imageURL={users[item.author].avatarURL}
                alt={users[item.author].name}
                />
                </div>
                <div className='questionDetail'>
                    <h4>Would you rather...</h4>
                    <p>{
                        (item.optionTwo.votes.includes(authedUser))?
                        item.optionTwo.text
                        :
                        (question_id)?(isThisAnswered)?null:item.optionOne.text:item.optionOne.text
                        }
                    </p>
                    {
                        (question_id)?(isThisAnswered)?
                        <Comparison/>
                        :
                        <PollForm
                        optionOneText={item.optionOne.text}
                        optionTwoText={item.optionTwo.text}
                        handleSelection={handleSelection}
                        handleSubmit={handleSubmit}
                        />
                        :
                        <button className='primaryButton'><Link to={`/questions/${item.id}`}>View Poll</Link></button>
                    }
                </div>
            </div>
            </>
            :null}
        </div>
    );
}
const mapStateToProps =({users, questions, authedUser})=>{
    return{
        users,
        questions,
        authedUser
    }
}
export default connect(mapStateToProps)(QuestionCard)