export const RECEIVE_USERS = 'RECIEVE_USERS'

export const setUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}