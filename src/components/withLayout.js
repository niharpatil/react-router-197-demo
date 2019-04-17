import React, {Component} from 'react'
import {Link} from 'react-router-dom'




export default (WrappedComponent) => {
    return (props) => (
      <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <Link to="/page1" className="navbar-item">
            Page1
          </Link>

          <Link to="/page2" className="navbar-item">
            Page2
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
        <WrappedComponent />
      </div>
    )
}