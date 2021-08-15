import './index.scss'

import { Input, Button, Form,  Checkbox, InputNumber, Select, message } from 'antd'
import Upload from 'Components/UI/Upload'

const GoodsForm = props => {
    // 商品类型
    const typeList = props.typeList

    // 可选规格
    const specifications = ['中杯', '大杯']

    // 可选温度
    const temperature = ['常规冰', '多冰', '少冰', '去冰', '常温', '温', '热']

    // 可选糖量
    const sugar = ['多糖', '常规糖', '少糖', '无糖']

    const goods = props.goods ? JSON.parse(JSON.stringify(props.goods)) : {
        name: '',
        type: '',
        pic: '',
        mediumPrice: 0,
        bigPrice: 0,
        specifications: [],
        temperature: [],
        sugar: []
    }

    if ( props.goods ) {
        goods.bigPrice = goods.big_price
        goods.mediumPrice = goods.medium_price
        goods.specifications = goods.specifications.split(',')
        goods.temperature = goods.temperature.split(',')
        goods.sugar = goods.sugar.split(',')
    }

    // 渲染商品类型选项
    const renderTypeList = () => typeList.map(item => <Select.Option key={ item.id } value={ item.type }>{ item.type }</Select.Option>)

    // 获取图片
    const getFile = (type, info) => {
        if ( info.response && info.response.data ) {
            goods.pic = info.response.data
        }
    }
    
    // 点击提交
    const submit = () => {
        const { name, pic, mediumPrice, bigPrice, specifications, sugar, temperature, type } = goods
        if ( !name || !pic || !mediumPrice || !bigPrice || !type || specifications.length === 0 || sugar.length === 0 || temperature.length === 0 ) {
            message.error('请将信息填写完整')
        } else {
            props.submit(goods)
        }
    }

    return (
        <Form name="basic">
            <Form.Item label="商品名称" name="goodsname" rules={[{ required: true, message: '请输入商品名称' }]}>
                <Input placeholder="请输入商品名称" defaultValue={ goods.name } value={ goods.name } onChange={e => goods.name = e.target.value} />
            </Form.Item>
            <Form.Item label="商品类型" name="goodstype" rules={[{ required: true, message: '请选择商品类型' }]}>
                <Select defaultValue={ goods.type } value={ goods.type } onChange={value => goods.type = value}>
                    {/* <Select.Option value="果茶">果茶</Select.Option>
                    <Select.Option value="奶茶">奶茶</Select.Option>
                    <Select.Option value="咖啡">咖啡</Select.Option> */}
                    { renderTypeList() }
                </Select>
            </Form.Item>
            <Form.Item label="商品图片" name="img" rules={[{ required: true }]}>
                <Upload type="pic" upload={ getFile } />
            </Form.Item>
            <Form.Item label="可选规格" name="goodsspecifications" rules={[{ required: true }]}>
                <Checkbox.Group options={ specifications } value={ goods.specifications } defaultValue={ goods.specifications } onChange={value => goods.specifications = value} />
            </Form.Item>
            <Form.Item label="商品价格" name="goodsprice" rules={[{ required: true, message: '请输入商品价格' }]}>
                <InputNumber placeholder="中杯" defaultValue={ goods.mediumPrice } onChange={value => goods.mediumPrice = value} />
                <InputNumber placeholder="大杯" defaultValue={ goods.bigPrice } onChange={value => goods.bigPrice = value} />
            </Form.Item>
            <Form.Item label="可选温度" name="goodstemperature" rules={[{ required: true }]}>
                <Checkbox.Group options={ temperature } value={ goods.temperature } defaultValue={ goods.temperature } onChange={value => goods.temperature = value} />
            </Form.Item>
            <Form.Item label="可选糖分" name="goodssugar" rules={[{ required: true }]}>
                <Checkbox.Group options={ sugar } value={ goods.sugar } defaultValue={ goods.sugar } onChange={value => goods.sugar = value} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={ submit }>提交</Button>
            </Form.Item>
        </Form>
    )
}

export default GoodsForm