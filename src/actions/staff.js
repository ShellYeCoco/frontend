import request from 'Utils/request'
import { STAFF_ADD, GET_STAFF_LIST } from "./actionType"
import api from '@/api/staff'

const staff = {
    // 添加员工
    staffAdd (data) {
        return async dispatch => {
            const result = await request({
                url: api.STAFF_ADD,
                method: 'POST',
                data
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: STAFF_ADD,
                    payload: result.data
                })
                return true
            }

        }
    },

    // 获取员工列表
    getStaffList (data) {
        return async dispatch => {
            const result = await request({
                url: api.GET_STAFF_LIST,
                data
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_STAFF_LIST,
                    payload: result.data
                })
            }
        }
    },

    // 删除员工
    staffDelete (id) {
        return async dispatch => {
            const result = await request({
                url: api.STAFF_DELETE,
                data: {
                    id
                }
            })

            if ( result.data.code === 200 ) {
                return true
            }
        }
    },

    // 编辑员工信息
    staffEdit (data) {
        return async () => {
            const result = await request({
                url: api.STAFF_EDIT,
                method: 'POST',
                data
            })

            if ( result.data.code === 200 ) {
                return true
            }
        }
    }
}

export default staff