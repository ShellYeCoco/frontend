import React, { Component } from 'react'

import { Input, Select, Button } from 'antd'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            type: 'all'
        }
    }

    renderOptions = () => this.props.typeList.map(item => <Select.Option key={ item.id } value={ item.type }>{ item.type }</Select.Option>)
    
    render() {
        const { name, type } = this.state

        return (
            <div className="search">
                <label>
                    <span>商品名称:</span>
                    <Input value={ name } onChange={e => this.setState({name: e.target.value})} />
                </label>
                <label>
                    <span>商品类型:</span>
                    <Select value={ type } defaultValue={ type } onChange={value => this.setState({type: value})}>
                        <Select.Option value="all">全部</Select.Option>
                        { this.renderOptions() }
                    </Select>
                </label>
                <Button type="primary" onClick={() => this.props.search({name, type})}>搜索</Button>
                <Button type="primary" onClick={() => this.props.push('/goodsadd')}>添加商品</Button>
            </div>
        )
    }
}