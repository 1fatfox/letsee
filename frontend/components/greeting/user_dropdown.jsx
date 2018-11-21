import React, { Component } from 'react';


class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    const toggleState = !this.state.showMenu;
    this.setState({ showMenu: toggleState });
  }

  logoutAndRedirect() {
    this.props.logout().then(() => this.props.push("/"));
  }

  render() {
    let you_dropdown;
     if (this.state.showMenu) {
       you_dropdown = (
        <div className="you-dropdown">
        <div className="menu">
          <div className= "top-dropdown">
            <img className="you-droppeddown-image" src={window.YouDropdownUrl}></img>
            <h2 className="dropdown-name" >{this.props.currentUser.first_name}</h2>
          </div>
          <div className="dropdown-signout-background">
            <button className="dropdown-signout" onClick={this.logoutAndRedirect}>Sign Out</button>
          </div>
          </div>
        </div>
        );
    } else {
      you_dropdown = null;
    }

    return (
      <div>
        <button className="you-dropdown-text" onClick={this.toggleMenu}>
          You
        </button>
          {you_dropdown}
      </div>
    );
  }
}

export default UserDropdown;
