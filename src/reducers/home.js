import { GET_HOME_DATA } from "@/actions/actionType"

const initState = {
    initData: null
}

const home = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_HOME_DATA:
            newState.initData = action.payload.data
            break

        default:
            break
    }

    return newState
}

export default home