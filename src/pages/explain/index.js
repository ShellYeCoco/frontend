import React, { Component } from 'react'
import './index.scss'

export default class Explain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            style: {
                background: 'red',
                color: 'white'
            }
        }
    }

    render() {
        const { style } = this.state
        return (
            <div id="explain" className="container">
                <h2>coco 管理平台</h2>
                <h3>介绍</h3>
                <span className="l2">coco 管理平台，基于 react 全家桶(前端) + Express(后端) 等技术构建，是作者学习 react 技术之后第一个用 react 写的后台管理项目，项目花费时间(前端+后端)共 22 天。由于时间关系以及作者还有自己的事情需要处理(啊啊服务器要到期了换一个性价比高的服务器，以及对博客项目有了新的优化方案，还有去 github 上看看其他大佬的作品等等等等)，所以还有一些预期功能暂时没有添加上。虽然项目已经初步完成，但是作者后期有时间还是会对作品进行新的功能添加以及优化和维护，尽量让作品内容更加丰富多彩，早日将作品卖给 coco(狂喜)</span>
                <h3>主要技术(前端)</h3>
                <ul className="l2">
                    <li>react</li>
                    <li>react-router-dom</li>
                    <li>redux</li>
                    <li>react-redux</li>
                    <li>redux-thunk</li>
                    <li>antd</li>
                    <li>axios</li>
                    <li>echart</li>
                    <li>scss</li>
                    <li>...</li>
                </ul>
                <h3>主要功能</h3>
                <ul className="l2">
                    <li>对商品的管理，增删改查</li>
                    <li>对商品属性的管理，动态控制商品属性</li>
                    <li>对员工的管理，增删改查</li>
                    <li>对不同员工的权限划分以及管理</li>
                    <li>商品的下单</li>
                    <li>商品订单的查看</li>
                    <li>数据的可视化查看</li>
                </ul>
            </div>
        )
    }
}
