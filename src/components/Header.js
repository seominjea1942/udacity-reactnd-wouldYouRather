import React from 'react';
import {connect} from 'react-redux'
import ProfilePhoto from './ProfilePhoto';
import { Link } from 'react-router-dom'

function Header({dispatch, authedUserId, users}) {

    return (
        <header className="header">
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/newquestion'>New Question</Link></li>
                    <li><Link to='/leaderboard'>Leader Board</Link></li>
                </ul>
            </div>
            <div>
            {JSON.stringify(users)!=='{}'?
                <ul>
                    <li>{`Hello, ${users[authedUserId].name}`}</li>
                    <li><ProfilePhoto
                    size={40}
                    imageURL={users[authedUserId].avatarURL}
                    alt={users[authedUserId].name}
                    /></li>
                    <li>Log out</li>
                </ul>
                :
                null
            }
            </div>
        </header>
    );
}

const mapStateToProps = ({authedUser,users}) => {
    return {
        authedUserId: authedUser,
        users
    }
}

export default connect(mapStateToProps)(Header);