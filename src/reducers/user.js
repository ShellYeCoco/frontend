import { USER_LOGIN, GET_USER_INFO } from "@/actions/actionType"
import { setCookie } from 'Utils/cookie'

const initState = {
    userInfo: {
        admin: 0
    }
}

const user = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case USER_LOGIN:
            setCookie('token', action.payload.data.token)
            newState.userInfo = action.payload.data.userInfo
            break

        case GET_USER_INFO:
            newState.userInfo = action.payload.data
            break
        
        default:
            break
    }

    return newState
}

export default user