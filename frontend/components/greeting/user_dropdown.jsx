import React, { Component } from 'react';


class UserDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    const toggleState = !this.state.showMenu;
    this.setState({ showMenu: toggleState });
  }

  render() {
    let you_dropdown;
     if (this.state.showMenu) {
       you_dropdown = (
        <div className="menu">
          <h2>{this.props.currentUser.first_name}</h2>
          <button onClick={this.props.logout}>Sign Out</button>
        </div>
      );
    } else {
      you_dropdown = null;
    }

    return (
      <div>
        <button onClick={this.toggleMenu}>
          You
        </button>
          {you_dropdown}
      </div>
    );
  }
}

export default UserDropdown;
