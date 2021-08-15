import { List, Button } from 'antd'

const BaseData = props => {
    const data = [{
        text: `订单量: ${ props.orderCount }`,
        path: '/order'
    }, {
        text: `商品数量: ${ props.goodsCount }`,
        path: '/goodslist'
    }, {
        text: `员工数量: ${ props.staffCount }`,
        path: '/staffmanage'
    }]

    return (
        <List
            header={<h3>基础数据</h3>}
            bordered
            dataSource={ data }
            renderItem={item => (
                <List.Item>
                    <Button type="link" onClick={() => props.push(item.path)}>[查看详情]</Button>
                    { item.text }
                </List.Item>
            )}
        />
    )
}

export default BaseData