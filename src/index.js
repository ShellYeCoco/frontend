import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 引入路由
import { BrowserRouter as Router } from 'react-router-dom'

// 引入数据分块和 store
import { Provider } from 'react-redux';
import store from '@/store'

// 引入 animate.css
import 'animate.css'

// 引入 css 主题
import 'Assets/css/theme.scss'

// 引入重置样式
import 'Assets/css/reset.css'

// 引入 iconfont
import 'Assets/iconfont/iconfont.css'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
