import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* 
  路由器的两种类型：
  BrowserRouter 必须在包裹中，才能使用Link和Route
  HashRouter #后面的属于hash值(锚点值)  后面的不会作为资源发送给服务器
*/

import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <App name="马斯凯" age={21} /> 
  </BrowserRouter>,
  document.getElementById('root')
);