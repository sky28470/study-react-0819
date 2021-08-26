import React, { Component } from 'react'
import ReactDom from 'react-dom'
// 独立于当前组件和id=root的标签  遮罩
export default class Home extends Component {
  render() {
    return ReactDom.createPortal(
      this.props.children,
      document.getElementById('modal')
    )
  }
}
