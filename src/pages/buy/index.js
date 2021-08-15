import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import { Form, Button, Input, Select, Radio, InputNumber, message } from "antd"

class Buy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            good: null,
            id: '',
            specification: '',
            temperature: '',
            sugar: '',
            number: 1,
            remark: ''
        }
    }

    componentDidMount () {
        this.props.getBuyGoods().then(res => {
            if ( res ) {
                // 默认选择第一项上架商品
                this.props.goodsList.map(item => {
                    if ( item.on_sale ) {
                        this.setState({
                            good: item,
                            id: item.id
                        })
                        return
                    }
                })
            }
        })
    }

    // 渲染商品选项
    renderGoodItems = () => this.props.goodsList.map(item => <Select.Option key={ item.id } value={ item.id } disabled={ item.on_sale === 0 }>{ item.name }</Select.Option>)

    // 选择商品
    selectGood = id => {
        this.props.goodsList.map(item => {
            if ( item.id === id ) {
                this.setState({
                    good: item
                })
            }
        })
    }

    // 提交订单
    submit = () => {
        const { good, specification, temperature, sugar, number, remark } = this.state
        if ( !good || !specification || !temperature || !sugar || !number ) {
            message.error('请将信息填写完整')
        } else {
            this.props.orderSubmit({
                id: good.id,
                goods_type: good.type,
                goods_name: good.name,
                specification,
                temperature,
                sugar,
                number,
                remark,
                price: specification === '中杯' ? good.medium_price * number : good.big_price * number
            }).then(res => {
                if ( res ) {
                    message.success('下单成功')
                }
            })
        }
    }

    render() {
        const { good, id, specification, number } = this.state

        if ( good ) {
            return (
                <div id="buy" className="container">
                    <Form name="buy-form">
                        <Form.Item label="商品名称" name="goodname" rules={[{ required: true, message: '请选择商品名称' }]}>
                            <Select value={ id } onChange={value => this.selectGood(value)}>{ this.renderGoodItems() }</Select>
                        </Form.Item>
                        <Form.Item label="商品规格" name="goodspecifications" rules={[{ required: true, message: '请选择商品规格' }]}>
                            <Radio.Group 
                                options={ good.specifications.split(',') }
                                onChange={e => this.setState({specification: e.target.value})} 
                            />
                        </Form.Item>
                        <Form.Item label="温度选择" name="goodtemperature" rules={[{ required: true, message: '请选择温度' }]}>
                            <Radio.Group 
                                options={ good.temperature.split(',') }
                                onChange={e => this.setState({temperature: e.target.value})} 
                            />
                        </Form.Item>
                        <Form.Item label="糖量选择" name="goodsugar" rules={[{ required: true, message: '请选择糖量' }]}>
                            <Radio.Group 
                                options={ good.sugar.split(',') }
                                onChange={e => this.setState({sugar: e.target.value})} 
                            />
                        </Form.Item>
                        <Form.Item label="商品数量" name="goodnumber" rules={[{ required: true, message: '请输入商品数量' }]}>
                            <InputNumber defaultValue={ 1 } onChange={value => this.setState({number: value})} />
                        </Form.Item>
                        <Form.Item label="商品备注" name="goodremark" rules={[{ required: true, message: '请输入商品数量' }]}>
                            <Input.TextArea onChange={e => this.setState({remark: e.target.value})} />
                        </Form.Item>
                        <Form.Item label="商品总价" name="goodprice" rules={[{ required: true, message: '请输入商品数量' }]}>
                            { specification && (specification === '中杯' ? good.medium_price * number : good.big_price * number) + '元' }
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" onClick={ this.submit }>提交订单</Button>
                        </Form.Item>
                    </Form>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateFromProps = state => {
    return state.order
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('order'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Buy)