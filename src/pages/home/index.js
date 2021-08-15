import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import BaseData from './BaseData'
import OrderChart from './OrderChart'

class Home extends Component {
    componentDidMount () {
        this.props.getHomeData()
    }
    
    render() {
        const { initData } = this.props

        if ( initData ) {
            return (
                <div id="home" className="container">
                    <BaseData 
                        staffCount={ initData.staffCount } 
                        orderCount={ initData.orderCount } 
                        goodsCount={ initData.goodsCount } 
                        push={ this.props.history.push }
                    />
                    <OrderChart orderList={ initData.orderList } />
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateFromProps = state => {
    return state.home
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('home'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Home)