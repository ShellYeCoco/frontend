// 商品
import { GET_GOODS_LIST, GET_GOODS_TYPE_LIST } from "@/actions/actionType"

const initState = {
    list: null,
    pageInfo: null,
    typeList: null
}

const goods = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_GOODS_LIST:
            newState.list = action.payload.data.list
            newState.pageInfo = action.payload.data.page
            break

        case GET_GOODS_TYPE_LIST:
            newState.typeList = action.payload.data
            break

        default:
            break
    }

    return newState
}

export default goods