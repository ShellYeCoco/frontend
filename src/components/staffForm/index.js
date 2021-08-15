import React, { Component } from 'react';
import './index.scss'

import { Button, Input, Radio, message } from 'antd'

class StaffForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            identityList: [{
                label: '经理',
                value: '2'
            }, {
                label: '员工',
                value: '3'
            }],
            id: 0,
            username: '',
            password: '',
            identity: '3'
        }
    }

    componentDidMount () {
        if ( this.props.info ) {
            const { id, username, password, admin } = this.props.info
            this.setState({
                id,
                username,
                password,
                identity: admin
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.info ) {
            // 获取新的 props 更新 state
            const { id, username, password, admin } = nextProps.info
            this.setState({
                id,
                username,
                password,
                identity: admin
            })
        }
    }

    // 提交
    submit = () => {
        const { id, username, password, identity } = this.state
        if ( !username || !password || !identity ) {
            message.error('请将信息填写完整')
        } else {
            this.props.submit({
                id,
                username,
                password,
                identity
            })
        }
    }

    render () {
        const { identityList, username, password, identity } = this.state

        return (
            <div className="staff-form">
                <label>
                    <span>用户名:</span>
                    <Input value={ username } onChange={e => this.setState({username: e.target.value})} placeholder="请输入用户名" />
                </label>
                <label>
                    <span>密码:</span>
                    <Input.Password value={ password } onChange={e => this.setState({password: e.target.value})} placeholder="请输入密码" />
                </label>
                <label>
                    <span>身份:</span>
                    <Radio.Group 
                        options={ identityList } 
                        defaultValue={ identity }
                        onChange={e => this.setState({identity: e.target.value})} 
                    />
                </label>
                <label>
                    <Button type="primary" onClick={ this.submit }>提交</Button>
                </label>
            </div>
        )
    }

}

// const StaffForm = props => {
//     // 员工身份
//     const identityList = [{
//         label: '经理',
//         value: '2'
//     }, {
//         label: '员工',
//         value: '3'
//     }]

//     const [id, setID] = useState(!props.info ? 0 : props.info.id)
//     const [username, setUsername] = useState(!props.info ? '' : props.info.username)
//     const [password, setPassword] = useState(!props.info ? '': props.info.password)
//     const [identity, setIdentity] = useState(!props.info ? '3' : props.info.admin.toString())

//     // 提交
//     const submit = () => {
//         if ( !username || !password || !identity ) {
//             message.error('请将信息填写完整')
//         } else {
//             props.submit({
//                 username,
//                 password,
//                 identity
//             })
//         }
//     }

//     return (
//         <div className="staff-form">
//             <label>
//                 <span>用户名:</span>
//                 <Input value={ username } onChange={e => setUsername(e.target.value)} placeholder="请输入用户名" />
//             </label>
//             <label>
//                 <span>密码:</span>
//                 <Input.Password value={ password } onChange={e => setPassword(e.target.value)} placeholder="请输入密码" />
//             </label>
//             <label>
//                 <span>身份:</span>
//                 <Radio.Group 
//                     options={ identityList } 
//                     defaultValue={ identity }
//                     onChange={e => setIdentity(e.target.value)} 
//                 />
//             </label>
//             <label>
//                 <Button type="primary" onClick={ submit }>提交</Button>
//             </label>
//         </div>
//     )
// }

export default StaffForm