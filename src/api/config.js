// 开发环境
const DEV_API = 'http://localhost:3005'

// 生产环境
const PROD_API = ''

// 根据不同环境导出不同的 API
const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_API : DEV_API

export default BASE_URL