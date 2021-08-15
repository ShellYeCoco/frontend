import React from 'react';
import RouterComponent from '@/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '@/actions'

import OpenImage from '@/assets/img/coco_open.png'
import CloseImage from '@/assets/img/coco_close.png'
import { remove } from 'Utils/cookie'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    TeamOutlined,
    RestOutlined,
    ExclamationCircleOutlined,
    PayCircleOutlined,
    BarsOutlined,
    LogoutOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayoutContent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            collapsed: false,
        }
    }
    
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    // 退出登录
    logout = () => {
        remove('token')
        this.props.push('/login')
    }

    render() {
        const { collapsed } = this.state;
        const { admin } = this.props.userInfo
        const { pathname } = this.props

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{     
                        color: 'white',
                        height: '60px',
                        lineHeight: '60px',
                        textAlign: 'center',
                        fontSize: '20px'
                    }}>{ collapsed ? <img src={ CloseImage } alt="coco" /> : <img src={ OpenImage } alt="coco" /> }</div>
                    <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
                        <Menu.Item key="/home" icon={<PieChartOutlined />}><Link to="/home">首页</Link></Menu.Item>
                        <SubMenu key={['/goodslist', '/goodsadd', '/goodsparameter']} icon={<RestOutlined />} title="商品管理">
                            <Menu.Item key="/goodslist"><Link to="/goodslist">商品列表</Link></Menu.Item>
                            { admin == 1 && <Menu.Item key="/goodsadd"><Link to="/goodsadd">添加商品</Link></Menu.Item> }
                            <Menu.Item key="/goodsparameter"><Link to="/goodsparameter">参数管理</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/staffmanage" icon={<TeamOutlined />}><Link to="/staffmanage">员工管理</Link></Menu.Item>
                        <Menu.Item key="/buy" icon={ <PayCircleOutlined /> }><Link to="/buy">商品下单</Link></Menu.Item>
                        <Menu.Item key="/order" icon={ <BarsOutlined /> }><Link to="/order">订单列表</Link></Menu.Item>
                        <Menu.Item key="/explain" icon={ <ExclamationCircleOutlined /> }><Link to="/explain">说明</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <span style={{color: 'white', marginRight: '40px', cursor: 'pointer'}} onClick={ this.logout }>
                            <LogoutOutlined style={{marginRight: '6px'}} />退出登录
                        </span>
                    </Header>
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ padding: '16px', boxSizing: 'border-box', background: 'rgb(240, 242, 245)' }}>
                        {/* 路由展示区 */}
                        <RouterComponent />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>版权来源于 - 夏叶</Footer>
                </Layout>
            </Layout>
        );
    }
}

const mapStateFromProps = state => {
    return state.user
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('user'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(LayoutContent)