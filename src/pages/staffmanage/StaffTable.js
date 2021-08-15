import React, { Fragment } from "react"
import { Table, Button, Popconfirm, Tag } from "antd"

const StaffTable = props => {
    const columns = [{
        title: '员工名称',
        dataIndex: 'username',
        key: 'username'
    }, {
        title: '员工身份',
        dataIndex: 'admin',
        key: 'admin',
        render: item => <Tag color={ item === 2 ? '#87d068' : '#d3adf7' }>{ item === 2 ? '经理' : '员工' }</Tag>
    }]

    // 权限管理
    if ( props.admin === 1 ) {
        columns.push({
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (value, data, index) => {
                return <Fragment>
                    <Button type="primary" shape="circle" onClick={() => props.edit(index)}><i className="iconfont edit"></i></Button>
                    <Popconfirm
                        title={`你确定要删除${ (data.admin === 2 ? '经理' : '员工') }'${ data.username }'吗`}
                        onConfirm={() => props.delete(data.id)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type="danger" shape="circle"><i className="iconfont shanchu"></i></Button>
                    </Popconfirm>
                </Fragment>
            }
        })
    }

    return (
        <Table
            dataSource={ props.list } 
            columns={ columns } 
            rowKey="id" 
            pagination= {{
                position: ['bottomCenter'],
                current: props.current,
                total: props.total,
                defaultPageSize: props.pageSize
            }}
            onChange={page => props.changePaging(page)}
        />
    )
}

export default StaffTable