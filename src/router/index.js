// 这里是路由配置文件
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom'

import Home from 'Pages/home'
import Login from 'Pages/login'
import Register from 'Pages/register'
import GoodsList from 'Pages/goodslist'
import GoodsAdd from 'Pages/goodsadd'
import StaffManage from 'Pages/staffmanage'
import Explain from 'Pages/explain'
import GoodsParameter from 'Pages/goodsparameter'
import Buy from 'Pages/buy'
import Order from 'Pages/order'
import NotFund from 'Pages/notfund'

const nav = [{
    path: '/home',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/goodslist',
    component: GoodsList
}, {
    path: '/goodsadd',
    component: GoodsAdd
}, {
    path: '/staffmanage',
    component: StaffManage
}, {
    path: '/goodsparameter',
    component: GoodsParameter
}, {
    path: '/buy',
    component: Buy
}, {
    path: '/order',
    component: Order
}, {
    path: '/explain',
    component: Explain
}, {
    path: '',
    component: NotFund
}]

const RouterComponent = () => (
    <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        {nav.map((item, index) => <Route key={ index } path={ item.path } component={ item.component } />)}
    </Switch>
)

export default RouterComponent