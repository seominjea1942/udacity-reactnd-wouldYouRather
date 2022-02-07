import React, {useState, useEffect} from 'react';
import ProfilePhoto from './ProfilePhoto';
function ScoreCard({user}) {
    const [numAQ, setNumAQ] = useState(0)
    const [numCQ, setNumCQ] = useState(0)

    useEffect(()=>{
        setNumAQ(Object.keys(user.answers).length)
        setNumCQ(user.questions.length)
    },[user])
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

                    <h5>{numAQ}</h5>
                </div>
                <div>
                    <p>Created questions</p>
                    <h5>{numCQ}</h5>
                </div>
            </div>
            <div>
                <div>score</div>
                <div>{numAQ+numCQ}</div>
            </div>
        </div>
    );
}

export default ScoreCard;