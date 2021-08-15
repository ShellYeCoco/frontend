import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import TypeTable from './TypeTable'
import { message } from 'antd'

class GoodsParameter extends Component {
    componentDidMount () {
        this.props.getGoodsTypeList()
    }

    // 删除商品类型
    deleteGoodsType = id => {
        this.props.goodsTypeDelete(id).then(res => {
            if ( res ) {
                message.success('删除成功')
                this.props.getGoodsTypeList()
            }
        })
    }

    render() {
        const { typeList } = this.props
        const { admin } = this.props.userInfo
        return (
            <div id="goods-parameter" className="container">
                { typeList && <TypeTable 
                    list={ typeList } 
                    delete={ this.deleteGoodsType } 
                    add={ this.props.goodsTypeAdd }
                    getList={ this.props.getGoodsTypeList }
                    admin={ admin }
                /> }
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return {
        ...state.goods,
        ...state.user
    }
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('goods'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(GoodsParameter)
