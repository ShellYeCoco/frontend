import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import GoodsForm from 'Components/goodsForm'
import { message } from 'antd'

class GoodsAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            typeList: null
        }
    }
    
    
    componentDidMount () {
        if ( !this.props.typeList ) {
            this.props.getGoodsTypeList().then(() => {
                this.setState({
                    typeList: this.props.typeList
                })
            })
        } else {
            this.setState({
                typeList: this.props.typeList
            })
        }
    }

    // 提交
    submit = goods => {
        this.props.goodsAdd(goods).then(res => {
            if ( res ) {
                message.success('提交成功')
            }
        })
    }

    render() {
        const { typeList } = this.state
        
        return (
            <div id="goods-add" className="container">
                { typeList && <GoodsForm submit={ this.submit } typeList={ typeList } /> }
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.goods
}

const mapDispatchFromProps = dispacth => {
    return bindActionCreators(actions('goods'), dispacth)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(GoodsAdd)