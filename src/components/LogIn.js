import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import ProfilePhoto from './ProfilePhoto';

function LogIn({dispatch, users}) {

    const [currentUser, setCurrentUser] = useState('meow')

    const getCurrentUser = (e,id) => {
        e.preventDefault();
        setCurrentUser(users[id].name)
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
                    <button>{currentUser}</button>
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

const mapStateToProps = ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(LogIn);