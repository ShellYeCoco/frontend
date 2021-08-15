import { GET_STAFF_LIST } from "@/actions/actionType"

const initState = {
    list: null,
    pageInfo: null
}

const staff = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_STAFF_LIST:
            newState.list = action.payload.data
            newState.pageInfo = action.payload.page
            break

        default:
            break
    }

    return newState
}

export default staff