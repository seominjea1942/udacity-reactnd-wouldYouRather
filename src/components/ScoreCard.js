import React from 'react';
import ProfilePhoto from './ProfilePhoto';
function ScoreCard({user}) {
    return (
        <div className="scoreCard">
            <div>
                <ProfilePhoto
                size={100}
                imageURL={user.avatarURL}
                alt={user.name}/>
            </div>
            <div>
            <h1>{user.name}</h1>
                <div>
                    <p>Answered questions</p>
                    <h5>{user.answeredQuestions}</h5>
                </div>
                <div>
                    <p>Created questions</p>
                    <h5>{user.createdQuestions}</h5>
                </div>
            </div>
            <div>
                <div>score</div>
                <div>{user.score}</div>
            </div>
        </div>
    );
}

export default ScoreCard;