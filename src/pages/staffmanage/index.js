import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import Tab from './Tab'
import StaffTable from './StaffTable'
import StaffForm from 'Components/staffForm'
import { message, notification, Modal } from 'antd'

class StaffManage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page: 1,
            username: '',
            admin: '',
            eidtModal: false,
            activeIndex: 0
        }
    }
    

    componentDidMount () {
        // 获取员工列表
        this.getList()

        // 提示信息
        notification.info({
            duration: null,
            message: 'Notification Title',
            description: <div>
                <p>经理: 可以进行除了员工管理之外的仍和操作</p>
                <p>店员: 只有查看权</p>
                <p style={{color: 'red'}}>* 后期将会推出更细致的权限管理，由于时间关系，店长管理页面可能暂时还没有，敬请期待</p>
            </div>
        })
    }

    // 获取数据
    getList = () => {
        const { page, username, admin } = this.state
        this.props.getStaffList({
            page, 
            username, 
            admin
        })
    }

    // 编辑员工信息
    edit = activeIndex => {
        this.setState({
            activeIndex
        }, () => {
            this.setState({
                eidtModal: true
            })
        })
    }

    // 提交修改
    submitEdit = info => {
        this.props.staffEdit(info).then(res => {
            if ( res ) {
                this.setState({eidtModal: false})
                message.success('修改成功')
                this.getList()
            }
        })
    }

    // 改变页数
    changePaging = pageInfo => {
        this.setState({
            page: pageInfo.current
        }, () => {
            this.getList()
        })
    }

    // 删除员工
    delete = id => {
        this.props.staffDelete(id).then(res => {
            if ( res ) {
                message.success('删除成功')
                this.getList()
            }
        })
    }

    // 搜索
    search = info => {
        this.setState({
            username: info.username,
            admin: info.admin
        }, () => {
            this.getList()
        })
    }

    // 添加员工
    staffAdd = info => {
        this.props.staffAdd(info).then(res => {
            if ( res ) {
                this.getList()
                message.success('添加成功')
            }
        })
    }

    render() {
        const { list, pageInfo } = this.props
        const { eidtModal, activeIndex } = this.state
        const { admin } = this.props.userInfo
        
        return (
            <div id="staff-manage" className="container">
                {/* 操作栏 */}
                <Tab 
                    staffAdd={ this.staffAdd } 
                    search={ this.search }
                    admin={ admin }
                />

                {/* 渲染员工列表 */}
                { 
                    list && <StaffTable 
                        list={ list } 
                        edit={ this.edit } 
                        delete={ this.delete } 
                        total={ pageInfo.total } 
                        pageSize={ pageInfo.page_size }
                        current={ pageInfo.page }
                        changePaging={ this.changePaging }
                        admin={ admin }
                    /> 
                }

                {/* 修改弹窗 */}
                <Modal 
                    title={ list && list.length  && list[activeIndex].username } 
                    visible={ eidtModal } 
                    footer="" 
                    width={ 660 }
                    onCancel={() => this.setState({eidtModal: false})}
                >
                    <StaffForm submit={ this.submitEdit } info={ list && list.length  && list[activeIndex] || null } />
                </Modal>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return {
        ...state.staff,
        ...state.user
    }
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('staff'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(StaffManage)