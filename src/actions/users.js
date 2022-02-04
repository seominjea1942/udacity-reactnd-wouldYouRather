export const RECEIVE_USERS = 'RECIEVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'


export const setUsers = (users) => {
    const newUsers = {}
    const userIds = Object.keys(users)
    userIds.forEach((id)=>{
        newUsers[id] = {
            ...users[id],
            answeredQuestions: Object.keys(users[id].answers).length,
            createdQuestions: users[id].questions.length,
            score: Object.keys(users[id].answers).length + users[id].questions.length
        }
    })
    return {
        type: RECEIVE_USERS,
        users: newUsers
    }
}