import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import { message, Modal } from 'antd'
import Search from './Search'
import GoodsTable from './GoodsTable'
import GoodsForm from 'Components/goodsForm'

class GoodsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page: 1,
            name: '',
            type: 'all',
            activeIndex: 0,
            eidtModal: false,
            typeList: null
        }
    }
    

    componentDidMount () {
        // 获取商品列表
        this.getList()

        // 获取商品类型
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

    // 获取数据
    getList = () => {
        const { page, name, type } = this.state
        this.props.getGoodsList({
            page,
            name,
            type
        })
    }

    // 搜索
    search = info => {
        this.setState({
            name: info.name,
            type: info.type,
        }, () => {
            this.getList()
        })
    }

    // 编辑
    edit = activeIndex => {
        this.setState({
            eidtModal: true,
            activeIndex
        })
    }

    // 提交编辑
    submitEdit = info => {
        // this.props.getGoodsList(info)
    }

    // 删除
    delete = id => {
        this.props.goodsDelete(id).then(res => {
            if ( res ) {
                message.success('删除成功')
                this.getList()
            }
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

    // 上下架
    changeOnSale = (id, on_sale) => {
        const status = on_sale === 1 ? 0 : 1
        this.props.changeOnSale(id, status).then(res => {
            if ( res ) {
                message.success(status ? '上架成功' : '下架成功')
                this.getList()
            }
        })
    }

    render() {
        const { list, pageInfo } = this.props
        const { eidtModal, activeIndex, typeList } = this.state
        const { admin } = this.props.userInfo
        return (
            <div id="goods-list" className="container">
                {/* 搜索 */}
                { typeList && <Search search={ this.search } push={ this.props.history.push } typeList={ typeList } /> }

                {/* 渲染列表 */}
                { 
                    list && <GoodsTable 
                        list={ list } 
                        edit={ this.edit } 
                        delete={ this.delete } 
                        total={ pageInfo.total } 
                        pageSize={ pageInfo.page_size }
                        current={ pageInfo.page }
                        changePaging={ this.changePaging }
                        changeOnSale={ this.changeOnSale }
                        admin={ admin }
                    /> 
                }

                {/* 修改弹窗 */}
                { (list && list.length && typeList) && <Modal 
                    title={ list && list.length && list[activeIndex].name } 
                    visible={ eidtModal } 
                    footer="" 
                    width={ 660 }
                    onCancel={() => this.setState({eidtModal: false})}
                >
                    { eidtModal && <GoodsForm 
                        submit={ this.submitEdit } 
                        goods={ list && list.length  && list[activeIndex] || null } 
                        typeList={ typeList }
                    /> }
                </Modal> }
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

const mapDispatchFromProps = dispacth => {
    return bindActionCreators(actions('goods'), dispacth)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(GoodsList)
