import React, { Component } from 'react';
import logo from '../images/logoImmoD.png';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { isOpen: false };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Immo-D" />
            </Link>
            <button className="nav-btn" onClick={this.handleToggle}>
              <FiMenu className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li className="waves-effect waves-light btn">
              <Link to="/">Home</Link>
            </li>
            <li className="waves-effect waves-light btn">
              <Link to="/houses">Houses</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
