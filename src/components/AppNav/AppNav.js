import React from 'react';

function AppNav (props) {

  const renderNavItems = () => {
    return props.navItems.map((item, index) => { return ( <span>&nbsp;&nbsp; <a href="#" key={`nav-${index}`} onClick={ () => props.handleNavClick(item.value) }>{ item.label } </a>
    &nbsp;&nbsp;| </span> ) } 
    )
  }



  return (
    <nav>
      { renderNavItems() }
    </nav>
  )

}

export default AppNav;
