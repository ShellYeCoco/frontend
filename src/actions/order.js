import request from 'Utils/request'
import api from '@/api/order'
import { GET_BUY_GOODS, GET_ORDER_LIST } from './actionType'

const order = {
    // 获取可购买商品列表
    getBuyGoods () {
        return async dispatch => {
            const result = await request({
                url: api.GET_BUY_GOODS
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_BUY_GOODS,
                    payload: result.data
                })

                return true
            }
        }
    },

    // 提交订单
    orderSubmit (data) {
        return async dispatch => {
            const result = await request({
                url: api.ORDER_SUBMIT,
                method: 'POST',
                data
            })

            if ( result.data.code === 200 ) {
                return true
            }
        }
    },

    // 获取订单列表
    getOrderList (data) {
        return async dispatch => {
            const result = await request({
                url: api.GET_ORDER_LIST,
                data
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_ORDER_LIST,
                    payload: result.data
                })
            }
        }
    }
}

export default order