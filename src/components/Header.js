import React from 'react';
import {connect} from 'react-redux'
import ProfilePhoto from './ProfilePhoto';
import { Link } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

function Header({dispatch, authedUserId, users}) {

    return (
        <header className="header">
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>New Question</Link></li>
                    <li><Link to='/leaderboard'>Leader Board</Link></li>
                </ul>
            </div>
            <div>
            {JSON.stringify(users)!=='{}'&& authedUserId !== ''?
                <ul>
                    <li>{`Hello, ${users[authedUserId].name}`}</li>
                    <li><ProfilePhoto
                    size={40}
                    imageURL={users[authedUserId].avatarURL}
                    alt={users[authedUserId].name}
                    /></li>
                    <Link to='/login' onClick={()=>{
                        dispatch(setAuthedUser(''))
                    }}>Log out</Link>
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