const { override, fixBabelImports, addWebpackAlias, setWebpackPublicPath } = require('customize-cra')
const path = require('path')

// 引入路径函数
const pathUrl = url => {
    return path.join(__dirname, url)
}

module.exports = override(
    // 帮助我们引入组件库的代码和样式
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    
    // 路径别名
    addWebpackAlias({
        '@': pathUrl('src'),
        'Components': pathUrl('src/components'),
        'Assets': pathUrl('src/assets'),
        'Pages': pathUrl('src/pages'),
        'Utils': pathUrl('src/utils'),
        'Router': pathUrl('src/router')
    }),

    // 打包后的文件路径配置
    setWebpackPublicPath('/web')
)