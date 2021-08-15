import axios from 'axios'
import BASE_URL from '@/api/config'
import { getCookie } from 'Utils/cookie'

// ui 组件
import { message } from 'antd'

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 3000
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器
instance.interceptors.request.use(config => {
    // Toast.loading('加载中...')
	return config
}, error => {
  	return Promise.reject(error);
})

instance.interceptors.response.use(response => {
    // Toast.hide()
	return response
}, error => {
  	return Promise.reject(error)
})

const request = ({
    method = 'GET', 
    url, 
    data = {}, 
    options = {
        headers: { 
            'content-type': 'application/x-www-form-urlencoded' 
            // 'content-type': 'application/json' 
        }
    }
}) => {
    const token = getCookie('token')
    let result = new Promise((resolve, reject) => {
        if ( method === 'POST' ) {
            const sendData = new URLSearchParams()
            for (let prop in data) {
                sendData.append(prop, data[prop])
            }
            sendData.append('token', token)
            instance.post(url, sendData, options).then(res => resolve(res)).catch(err => reject(err))
        } else {
            data.token = token
            instance.get(url, {
                params: data
            }, options).then(res => resolve(res)).catch(err => reject(err))
        }
    })

    result.then(res => {
        if ( res.data.code !== 200 ) {
            message.error(res.data.msg)
        }
    }).catch(err => {
        message.error('网络错误')
    })

    return result
}

export default request