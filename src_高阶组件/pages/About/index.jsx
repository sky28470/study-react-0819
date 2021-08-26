import React, { Component } from 'react'

export default class About extends Component {
  state = {
    arr: [1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }
  render() {
    return (
      <div>
        {
          this.state.arr.map((item, index) => <div key={index}><li><a href="www.baidu.com">{item}</a></li></div>)
        }
      </div>
    )
  }
}
