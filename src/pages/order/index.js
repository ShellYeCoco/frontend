import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import Search from './Search'
import OrderTable from './OrderTable'

class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page: 1,
            keyword: '',
            type: ''
        }
    }

    componentDidMount () {
        // 获取商品类型
        if ( !this.props.typeList ) {
            this.props.getGoodsTypeList()
        }

        // 获取订单列表
        this.getList()
    }

    // 获取列表
    getList = () => {
        const { page, keyword, type } = this.state
        this.props.getOrderList({
            page,
            keyword,
            type
        })
    }

    // 搜索
    search = info => {
        this.setState({
            keyword: info.className,
            type: info.type
        }, () => {
            this.getList()
        })
    }

    // 点击跳转页面
    changePaging = pageInfo => {
        this.setState({
            page: pageInfo.current
        }, () => {
            this.getList()
        })
    }

    render() {
        const { typeList, orderList, orderPageInfo } = this.props
        return (
            <div id="order" className="container">
                {/* 搜索栏目 */}
                { typeList && <Search typeList={ typeList } search={ this.search } /> }

                {/* 列表 */}
                { orderList && <OrderTable
                    list={ orderList } 
                    // edit={ this.edit } 
                    // delete={ this.delete } 
                    total={ orderPageInfo.total } 
                    pageSize={ orderPageInfo.page_size }
                    current={ orderPageInfo.page }
                    changePaging={ this.changePaging }
                    // changeOnSale={ this.changeOnSale }
                /> }
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return {
        ...state.order, 
        ...state.goods
    }
    // return state.goods
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators({...actions('order'), ...actions('goods')}, dispatch)
    // return bindActionCreators(actions('goods'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Order)