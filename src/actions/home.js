import request from 'Utils/request'
import api from '@/api/home'
import { GET_HOME_DATA } from './actionType'

const home = {
    getHomeData () {
        return async dispatch => {
            const result = await request({
                url: api.GET_HOME_DATA
            })

            if ( result.data.code === 200 ) {
                dispatch({
                    type: GET_HOME_DATA,
                    payload: result.data
                })
            }
        }
    }
}

export default home