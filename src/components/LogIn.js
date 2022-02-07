import React,{useState} from 'react';
import {connect} from 'react-redux'
import ProfilePhoto from './ProfilePhoto';
import { setAuthedUser } from '../actions/authedUser';
import { useNavigate, useLocation} from 'react-router-dom'

function LogIn({dispatch, users, authedUserId}) {
    const [signInId, setSignInId] = useState('')
    const [userOptionHide, setUserOptionHide] = useState('none')
    let navigate = useNavigate();
    const location = useLocation();


    const getCurrentUser = (e,id) => {
        e.preventDefault();
        setSignInId(id)
    }
    
    const toggleDropDown = () => {
        if(userOptionHide === 'none'){
            setUserOptionHide('block')
        } else {
            setUserOptionHide('none')
        }
    }

    const handleSignIn =()=>{
        dispatch(setAuthedUser(signInId))
        if(location !== undefined){
            if(location.state){
            if(location.state.redirected&&location.state.prevPath){
                navigate(location.state.prevPath)
            } else {
                navigate('/')
            }
            }else {
                navigate('/')
            }
        } 
        
    }
    return (
        <div className="loginBox">
            <div className="loginBoxHeader">
                <h2>Welcome to Would You Rather App!</h2>
                <p>Please sign in to continue</p>
            </div>
            <div className="loginBoxBody">
                <h1>{(location.state)?(location.state.redirected)?'Please select user to sign in':null:'Sign in'}</h1>
                <div className='wantToSignInAs'>
                    {
                        (signInId!=='')?
                        <>
                        <p>{`Want to sign in as '${users[signInId].name}'?`}</p>
                        <ProfilePhoto
                    size={100}
                    imageURL={users[signInId].avatarURL}
                    alt={signInId}
                    />
                    </>
                    :null
                    }
                </div>
                <div name="userSelectDropDown" id="userSelectDropDown">
                    <button
                    className="selectUserButton"
                    onClick={toggleDropDown}
                    >{JSON.stringify(users)!=='{}'&& authedUserId !== ''?users[authedUserId].name:'Select User'}</button>
                    <div
                    className="userOptions"
                    style={{display: userOptionHide}}
                    >
                    {
                        Object.keys(users).map((userName)=>(
                            <div className="userOption" onClick={(e)=>{getCurrentUser(e,users[userName].id)}} key={userName}>
                                <ProfilePhoto
                                size={60}
                                imageURL={users[userName].avatarURL}
                                alt={users[userName].name}
                                />
                                {users[userName].name}
                                </div>
                        ))
                    }
                    </div>
                    <button className="primaryButton"onClick={handleSignIn}>Sign In</button>
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