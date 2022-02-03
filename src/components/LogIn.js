import React from 'react';
import {connect} from 'react-redux'
import ProfilePhoto from './ProfilePhoto';
import { setAuthedUser } from '../actions/authedUser';

function LogIn({dispatch, users, authedUserId}) {

    const getCurrentUser = (e,id) => {
        e.preventDefault();
        dispatch(setAuthedUser(id))
    }

    return (
        <div className="loginBox">
            <div className="loginBoxHeader">
                <h2>Welcome to Would You Rather App!</h2>
                <p>Please sign in to continue</p>
            </div>
            <div>
                <img src="" alt="" />
                <h1>Sign in</h1>
                <div name="userSelectDropDown" id="userSelectDropDown">
                    <button>{JSON.stringify(users)!=='{}'?users[authedUserId].name:null}</button>
                    {
                        Object.keys(users).map((userName)=>(
                            <a className="userOption" href="/" onClick={(e)=>{getCurrentUser(e,users[userName].id)}} key={userName}>
                                <ProfilePhoto
                                size={60}
                                imageURL={users[userName].avatarURL}
                                alt={users[userName].name}
                                />
                                {users[userName].name}
                                </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({users, authedUser}) => {
    return {
        users,
        authedUserId:authedUser
    }
}

export default connect(mapStateToProps)(LogIn);