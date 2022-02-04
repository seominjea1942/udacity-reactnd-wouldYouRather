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
    usersValues.sort((a,b)=>b.score-a.score)
    const newUsers = {}
    usersValues.forEach((user)=>{
        newUsers[user.id] = user
    })
    console.log(newUsers)
    return {
        users: newUsers
    }
}
export default connect(mapStateToProps)(LeaderBoard);