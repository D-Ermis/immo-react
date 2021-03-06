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
            <li>
              <Link to="/" className="waves-effect waves-light btn">Home</Link>
            </li>
            <li>
              <Link to="/houses" className="waves-effect waves-light btn">Houses</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
