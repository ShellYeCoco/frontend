import BASE_URL from './config'

const api = {
    // 登录
    USER_LOGIN: `${ BASE_URL }/user/login`,

    // 获取用户信息
    GET_USER_INFO: `${ BASE_URL }/user/info`
}

export default api