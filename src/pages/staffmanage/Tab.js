import React, { Component } from 'react'

import { Button, Modal, Input, Select } from 'antd'
import StaffForm from 'Components/staffForm'

export default class Tab extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            addModal: false,

            // 员工身份
            identityList: [{
                label: '经理',
                value: '2'
            }, {
                label: '员工',
                value: '3'
            }],
            username: '',
            password: '',
            identity: '3',

            keyword: '',
            selectIdentity: ''
        }
    }

    // 输入
    inputValue = (type, value) => {
        this.setState({
            [type]: value
        })
    }

    submit = info => {
        this.props.staffAdd(info)
        this.setState({
            addModal: false
        })
    }
    
    render() {
        const { addModal, selectIdentity } = this.state

        return (
            <div className="tab">
                { this.props.admin === 1 && <div className="operation">
                    <span>操作:</span>
                    <Button type="primary" onClick={() => this.setState({addModal: true})}>添加员工</Button>
                </div> }

                <div>
                    <span>员工姓名:</span>
                    <Input onChange={e => this.setState({keyword: e.target.value})} />
                    <span>员工身份:</span>
                    <Select value={ selectIdentity } defaultValue={ selectIdentity } onChange={value => this.setState({selectIdentity: value})}>
                        <Select.Option value="2">经理</Select.Option>
                        <Select.Option value="3">员工</Select.Option>
                    </Select>
                    <Button type="primary" onClick={() => this.props.search({
                        username: this.state.keyword,
                        admin: this.state.selectIdentity
                    })}>搜索</Button>
                </div>

                {/* 添加用户弹窗 */}
                <Modal 
                    title="添加用户" 
                    visible={ addModal } 
                    getContainer={ false }
                    footer={ null }
                >
                    <StaffForm submit={ this.submit } />
                </Modal>
            </div>
        )
    }
}
