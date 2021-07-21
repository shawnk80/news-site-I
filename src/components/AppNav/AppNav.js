import React, { Component } from 'react';

class AppNav extends Component {

  renderNavItems = () => {
    return this.props.navItems.map((item, index) => { return ( <span>&nbsp;&nbsp; <a href="#" key={`nav-${index}`} onClick={ () => this.props.handleNavClick(item.value) }>{ item.label } </a>
    &nbsp;&nbsp;| </span> ) } 
    )
  }


  render() {
    return (
      <nav>
        { this.renderNavItems() }
      </nav>
    )
  }
}

export default AppNav;

// href="" key={`nav-${index}`} onClick={ () => this.props.handleNavClick(item.value)}