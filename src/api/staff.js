import BASE_URL from './config'

const api = {
    // 添加员工
    STAFF_ADD: `${ BASE_URL }/staff/add`,

    // 获取员工列表
    GET_STAFF_LIST: `${ BASE_URL }/staff/list`,

    // 删除员工
    STAFF_DELETE: `${ BASE_URL }/staff/delete`,

    // 修改员工
    STAFF_EDIT: `${ BASE_URL }/staff/edit`
}

export default api