import React, { Component, createContext } from 'react'

const UserContext = createContext({
  name: '马斯凯context',
  age: 181,
  hobby: "2021年8月11日00:38:22" 
})

function HigherOrder(WrapperCpn) {
  return props => {
    return (
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
    return (
      <div>
        {`home姓名：${this.props.name}年龄：${this.props.age}爱好：${this.props.hobby}`}
      </div>
    )
  }

}

class About extends Component {
  render() {
    return (
      <div>
        {`About姓名：${this.props.name}年龄：${this.props.age}爱好：${this.props.hobby}`}
      </div>
    )
  }
}

const UserHome = HigherOrder(Home)
const UserAbout = HigherOrder(About)

class App extends Component {
  render() {
    return (
      <div>
        app{this.props.name}
        <UserContext.Provider value={{name: '默认数据',age: 18, hobby:"熬夜不睡觉" }}>
          <UserHome></UserHome>
          <UserAbout></UserAbout>
        </UserContext.Provider>
      </div>
    )
  }

}
// 高阶组件
// function HigherOrder(WrapComponent) {
//   // 类式/函数组件名.displayName = '新组件名'
//   return class extends Component {
//     render() {
//       return <WrapComponent {...this.props}></WrapComponent>
//     }
//   }
// }

export default App
