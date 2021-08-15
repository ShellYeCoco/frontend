import { GET_BUY_GOODS, GET_ORDER_LIST } from "@/actions/actionType"

const initState = {
    goodsList: null,
    orderList: null,
    orderPageInfo: null
}

const order = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_BUY_GOODS:
            newState.goodsList = action.payload.data
            break

        case GET_ORDER_LIST:
            newState.orderPageInfo = action.payload.data.page
            newState.orderList = action.payload.data.list
            break

        default:
            break
    }

    return newState
}

export default order