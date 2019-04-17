import React, {Component} from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Page1 from './page1'
import Page2 from './page2'


class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
