import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '@/actions'

import LoginHead from 'Assets/img/login-head.jpg'
import { Input, Button, message } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: ''
        }
    }

    // 输入用户名
    inputUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    // 输入密码
    inputPassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    // 登录
    submit = () => {
        const { username, password } = this.state
        this.props.userLogin(username, password).then(() => {
            if ( this.props.userInfo ) {
                message.success('登陆成功')
                this.props.history.push('/home')
            }
        })
    }

    render() {
        return (
            <div id="login">
                <div className="block">
                    <img src={ LoginHead } alt="头像" />
                    <label className="title">登录 React 后台</label>
                    <label>
                        <span>用户名：</span>
                        <Input placeholder="请输入用户名" onChange={ this.inputUsername } />
                    </label>
                    <label>
                        <span>密码：</span>
                        <Input.Password placeholder="请输入密码" onChange={ this.inputPassword } />
                    </label>
                    <Button type="primary" onClick={ this.submit }>登录</Button>
                </div>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.user
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('user'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Login)