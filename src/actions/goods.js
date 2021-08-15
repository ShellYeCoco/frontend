import request from 'Utils/request'
import { GOODS_ADD, GET_GOODS_LIST, GOODS_EDIT, GET_GOODS_TYPE_LIST } from './actionType'
import api from '@/api/goods'

const goods = {
    // 添加商品
    goodsAdd (data) {
        return async dispatch => {
            const result = await request({
                method: 'POST',
                url: api.GOODS_ADD,
                data
            })
            
            if ( result.data.code === 200 ) {
                dispatch({
                    type: GOODS_ADD,
                    payload: result.data
                })
                return result
            }
        }
    },

    // 获取商品列表
    getGoodsList (data) {
        return async dispatch => {
            const result = await request({
                url: api.GET_GOODS_LIST,
                data
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_GOODS_LIST,
                    payload: result.data
                })
            }
        }
    },

    // 删除商品
    goodsDelete (id) {
        return async dispatch => {
            const result = await request({
                url: api.GOODS_DELETE,
                data: {
                    id
                }
            })

            if ( result.data.code === 200 ) {
                return true
            }
        }
    },

    // 上下架
    changeOnSale (id, status) {
        return async dispatch => {
            const result = await request({
                url: api.CHANGE_ONSALE,
                data: {
                    id,
                    status
                }
            })

            if ( result.data.code === 200 ) {
                return true
            }
        }
    },

    // 获取商品属性列表
    getGoodsTypeList () {
        return async dispatch => {
            const result = await request({
                url: api.GET_GOODS_TYPE_LIST
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_GOODS_TYPE_LIST,
                    payload: result.data
                })
            }
        }
    },

    // 删除商品属性
    goodsTypeDelete (id) {
        return async dispatch => {
            const result = await request({
                url: api.GOODS_TYPE_DELETE,
                data: {
                    id
                }
            })
            
            if ( result.data.code === 200 ) {
                return true
            }
        }
    },

    // 添加商品属性
    goodsTypeAdd (type) {
        return async dispatch => {
            const result = await request({
                url: api.GOODS_TYPE_Add,
                data: {
                    type
                }
            })
    
            if ( result.data.code === 200 ) {
                return true
            }
        }
    }
}

export default goods