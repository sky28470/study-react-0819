// 高阶组件

import React, { Component, createContext, createRef, forwardRef } from 'react'
// 创建一个 Context 对象
const UserContext = createContext({
  name: '马斯凯context',
  age: 181,
  hobby: "2021年8月11日00:38:22" 
})
// console.log(UserContext)

function HigherOrder(WrapperCpn) {
  return props => {
    return (
      // context使用方法：第二种 
      // props：组件身上的属性   
      // user：Provider 的 value 传递的数据
      <UserContext.Consumer>
        {
          user => <WrapperCpn {...props} {...user} /> 
        }
      </UserContext.Consumer>
    )
  }
}

class Home extends Component {
  render() {
    // this.context  来获取数据
    return <div>{`home姓名：${this.props.name}年龄：${this.props.age}爱好：${this.props.hobby},${this.props.cpn}`}</div>
  }

}
// context使用方法： 第一种(使用只使用一次，并且只有类组件才可使用)
// Home.contextType = UserContext
class About extends Component {
  render() {
    return <div>{`about姓名：${this.props.name}年龄：${this.props.age}爱好：${this.props.hobby},${this.props.cpn}`}</div>
  }
}

const UserHome = HigherOrder(Home)
const UserAbout = HigherOrder(About)

// forwardRef(高阶组件) 获取函数式组件内某一个组件的ref
const MyCpn = forwardRef(function(props, ref) {
  return (
    <div>
      <h2 ref={ref}>标题222</h2>
      <p>这是一句话啊</p>
    </div>
  )
})

class App extends Component {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
  }
  // 获取函数式组件内某一个组件的ref
  handleClick = () => {
    console.log(this.titleRef.current)
  }

  render() {
    return (
      <div>
        <MyCpn ref={this.titleRef}></MyCpn>
        app{this.props.name}
        {/* Provider：属性/提供器 */}
        <UserContext.Provider value={{name: '默认数据',age: 18, hobby:"熬夜不睡觉" }}>
          <UserHome cpn="home"></UserHome>
          <UserAbout cpn="about"></UserAbout>
        </UserContext.Provider>
        <button onClick={this.handleClick}>测试forwardRef</button>
      </div>
    )
  }

}

// 高阶组件
// 1.类组件
// function HigherOrder(WrapComponent) {
//   // 类式/函数组件名.displayName = '新组件名'
//   class NewCpnm extends Component {
//     render() {
//       return <WrapComponent {...this.props}></WrapComponent>
//     }
//   }
//   NewCpnm.displayName = 'NewName'
//   return NewCpnm
// }

// 2.函数组件
// function HigherOrder(WrapComponent) {
//   return props => {
//     return <WrapComponent {...props} />
//   }
// }

export default App
