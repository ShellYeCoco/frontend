import BASE_URL from './config'

const api = {
    // 增加商品
    GOODS_ADD: `${ BASE_URL }/goods/add`,

    // 获取商品列表
    GET_GOODS_LIST: `${ BASE_URL }/goods/list`,

    // 删除商品
    GOODS_DELETE: `${ BASE_URL }/goods/delete`,

    // 上下架
    CHANGE_ONSALE: `${ BASE_URL }/goods/onsale`,

    // 获取商品属性列表
    GET_GOODS_TYPE_LIST: `${ BASE_URL }/goods/typelist`,

    // 删除商品属性
    GOODS_TYPE_DELETE:  `${ BASE_URL }/goods/typedelete`,

    // 添加商品属性
    GOODS_TYPE_Add:  `${ BASE_URL }/goods/typeadd`
}

export default api