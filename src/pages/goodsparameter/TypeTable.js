import React, { useState } from 'react'

import { Table, Popconfirm, Button, Input, message } from 'antd'

import { dateFormat } from 'Utils'

const TypeTable = props => {
    const columns = [{
        title: '商品类型',
        dataIndex: 'type',
        key: 'type'
    }, {
        title: '添加时间',
        dataIndex: 'create_time',
        key: 'create_time',
        render: item => dateFormat(Date.parse(item), 'yyyy-MM-dd hh:mm:ss')
    }]

    // 权限处理
    if ( props.admin === 1 ) {
        columns.push({
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (value, data) => (
                <Popconfirm
                    title={`你确定要删除'${ data.type }'这一项吗`}
                    onConfirm={() => props.delete(data.id)}
                    okText="确定"
                    cancelText="取消"
                >
                    <Button type="danger" shape="circle"><i className="iconfont shanchu"></i></Button>
                </Popconfirm>
            )
        })
    }

    // 输入的商品类型
    const [goodsType, setGoodsType] = useState('')

    // 添加商品类型
    const add = () => {
        if ( !goodsType ) {
            message.error('请输入商品类型')
        } else {
            props.add(goodsType).then(res => {
                if ( res ) {
                    setGoodsType('')
                    message.success('添加成功')
                    props.getList()
                }
            })
        }
    }

    return (
        <div className="block goods-type">
            <h3>
                <span>商品类型管理：</span>
                <Input value={ goodsType } onChange={e => setGoodsType(e.target.value)} />
                <Button type="primary" onClick={ add }>添加</Button>
            </h3>
            <Table
                pagination={false}
                columns={ columns }
                dataSource={ props.list }
                rowKey="id"
            />
        </div>
    )
}

export default TypeTable