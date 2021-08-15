import React, { Fragment ,useState } from 'react'

import { Table, Button, Tooltip, Modal } from 'antd'

import { dateFormat } from 'Utils'

const OrderTable = props => {
    const [detailsModal, setDetailsModal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const columns = [{
        title: '商品名称',
        dataIndex: 'goods_name',
        key: 'goods_name'
    }, {
        title: '商品类型',
        dataIndex: 'goods_type',
        key: 'goods_type'
    }, {
        title: '商品规格',
        dataIndex: 'cup',
        key: 'cup'
    }, {
        title: '数量',
        dataIndex: 'number',
        key: 'number'
    }, {
        title: '金额',
        dataIndex: 'money',
        key: 'money',
        render: item => item + '元'
    }, {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        render: item => {
            if ( item ) {
                // 显示少部分内容，移入展示详细信息
                return <Tooltip placement="bottomLeft" title={ item }>
                    <span style={{cursor: 'pointer'}}>{ item }</span>
                </Tooltip>
            } else {
                return '无'
            } 
        }
    }, {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        render: item => dateFormat(Date.parse(item), 'yyyy-MM-dd hh:mm:ss')
    }, {
        title: '操作',
        dataIndex: 'opeartion',
        key: 'opeartion',
        render: (value, data, index) => <Button type="primary" onClick={() => {setActiveIndex(index); setDetailsModal(true)}}>详情</Button>
    }]

    return (
        <Fragment>
            {/* 表格 */}
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

            {/* 详情弹窗 */}
            <Modal
                visible={ detailsModal }
                title={ props.list[activeIndex].goods_name }
                footer={null}
                getContainer={ false }
                onCancel={() => setDetailsModal(false)}
            >
                {/* <img alt="example" style={{ width: '100%' }} src={previewImage} /> */}
                <div className="details-modal">
                    <p><span>名称:</span><span>{ props.list[activeIndex].goods_name }</span></p>
                    <p><span>类型:</span><span>{ props.list[activeIndex].goods_type }</span></p>
                    <p><span>数量:</span><span>{ props.list[activeIndex].number }</span></p>
                    <p><span>金额:</span><span>{ props.list[activeIndex].money }元</span></p>
                    <p><span>下单时间:</span><span>{ dateFormat(Date.parse(props.list[activeIndex].create_time), 'yyyy-MM-dd hh:mm:ss') }</span></p>
                    <p><span>规格:</span><span>{ props.list[activeIndex].cup }</span></p>
                    <p><span>糖量:</span><span>{ props.list[activeIndex].sugar }</span></p>
                    <p><span>冰量:</span><span>{ props.list[activeIndex].temperature }</span></p>
                    <p><span>备注:</span><span>{ props.list[activeIndex].remark }</span></p>
                </div>
            </Modal>
        </Fragment>
    )
}

export default OrderTable