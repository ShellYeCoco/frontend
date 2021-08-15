import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import LayoutContent from './content'
import { Skeleton } from 'antd'

import { getCookie } from 'Utils/cookie'

class LayOut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true
        }
    }
    
    componentDidMount () {
        // 骨架屏 验证token
        const token = getCookie('token')
        if ( token ) {
            this.props.getUserInfo(token).then(() => {
                this.closeSkeleton()
                const pathname = this.props.userInfo ? this.props.location.pathname : '/login'
                this.props.history.push({ pathname })
            })
        } else {
            this.closeSkeleton()
            this.props.history.push({pathname: '/login'})
        }
    }

    closeSkeleton = () => {
        this.setState({
            loading: false
        })
    }

    render() {
        const { loading } = this.state
        return (
            <Skeleton active avatar paragraph={{ rows: 4 }} loading={ loading }>
                <LayoutContent id="layout" push={ this.props.history.push } pathname={ this.props.location.pathname } />
            </Skeleton>
        )
    }
}

const mapStateFromProps = state => {
    return state.user
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('user'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(LayOut)