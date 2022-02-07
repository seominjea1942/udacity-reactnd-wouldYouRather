import React from 'react';
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard';

function LeaderBoard({dispatch, users}) {
    return (
        <div>
            {Object.values(users).map((user)=>(
                <ScoreCard key={user.id} user={user}/>
            ))}
        </div>
    );
}

const mapStateToProps = ({users}) => {
    let usersValues = Object.values(users)
    usersValues.sort((a,b)=>{
        const aScore = Object.keys(a.answers).length + a.questions.length
        const bScore = Object.keys(b.answers).length + b.questions.length
        return (bScore-aScore>0)?1:(bScore-aScore===0)?0:-1
    })
    const newUsers = {}
    usersValues.forEach((user)=>{
        newUsers[user.id] = user
    })
    return {
        users: newUsers
    }
}
export default connect(mapStateToProps)(LeaderBoard);