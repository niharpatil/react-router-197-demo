import React, { Component } from 'react'

import withLayout from './withLayout'


class Page2 extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return (<h1>This be page 2</h1>)
  }
}

export default withLayout(Page2)