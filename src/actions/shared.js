import {setUsers} from '../actions/users'
import { _getUsers } from '../utils/_DATA'


export const handleUserData = () => {
    return (dispatch) =>{
        return _getUsers()
        .then((users)=>{
            console.log(users)
            dispatch(setUsers(users))
        })
    }
}