import BASE_URL from './config'

const api = {
    // 获取可购买商品列表
    GET_BUY_GOODS: `${ BASE_URL }/order/goodlist`,

    // 提交订单
    ORDER_SUBMIT: `${ BASE_URL }/order/submit`,

    // 获取订单列表
    GET_ORDER_LIST: `${ BASE_URL }/order/list`
}

export default api