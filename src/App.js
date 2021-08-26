// 高阶组件的小案例
import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

// 登录控制
function withAuth (WrapCpn) {
  return props => {
    if(props.isLogin) {
      return <WrapCpn {...props} />
    }else {
      return <Login />
    }
  }
}
const AuthHomePage = withAuth(Home)
// const AuthAboutPage = withAuth(About)

// 计算组件渲染的耗时
function withTimeRender (VariationCpn) {
  return class extends Component {
    UNSAFE_componentWillMount() {
      // 卸载组件时触发
      this.startTime = Date.now()
    }
    componentDidMount() {
      // 组件已经被渲染到 DOM 中后执行
      const endTime = Date.now()
      const interval = endTime - this.startTime
      console.log(`${VariationCpn.name}组件渲染耗时：${interval}`)
    }
    render() {
      return <VariationCpn />
    }
  }
}

const HomePage = withTimeRender(Home)
const AboutPage = withTimeRender(About)
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePage/> */}
        <AboutPage/>
        <AuthHomePage isLogin={true}>
          哈哈
        </AuthHomePage>
      </div>
    )
  }
}
