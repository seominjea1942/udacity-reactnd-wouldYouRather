export const RECEIVE_USERS = 'RECIEVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'


export const setUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}

export const updateUser = (user) => {
    return {
        type:UPDATE_USER,
        user:{
            [user.id]:user
        }
    }
}