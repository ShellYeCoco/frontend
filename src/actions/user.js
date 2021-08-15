import { USER_LOGIN, GET_USER_INFO } from './actionType'
import api from '@/api/user'
import request from 'Utils/request'

const login = {
    // 用户登录
    userLogin (username, password) {
        return async dispatch => {
            const result = await request({
                url: api.USER_LOGIN,
                method: 'POST',
                data: {
                    username,
                    password
                }
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: USER_LOGIN,
                    payload: result.data
                })
                return true
            }
        }
    },

    // 获取用户信息
    getUserInfo (token) {
        return async dispatch => {
            const result = await request({
                url: api.GET_USER_INFO,
                data: {
                    token
                }
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_USER_INFO,
                    payload: result.data
                })
            }
        }
    }
}

export default login