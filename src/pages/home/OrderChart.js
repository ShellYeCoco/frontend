import React, { Component, createRef } from 'react'

import { List } from 'antd'

import * as echarts from 'echarts';
// option 是数据模型
import option from './option'

class OrderChart extends Component {
    componentDidMount () {
        var myChart = echarts.init(this.refs.chartEl);
        myChart.setOption(option)
    }

    render () {
        return (
            <List
                header={<h3>最近七日订单数量(额...由于不是正式项目没有太多数据，就用随机数来代替真实数据了)</h3>}
                bordered
            >
                <List.Item>
                    <div ref="chartEl" className="chart-box"></div>
                </List.Item>
            </List>
        )
    }
}

export default OrderChart