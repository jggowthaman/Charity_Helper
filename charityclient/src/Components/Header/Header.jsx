import React, { Component } from 'react';
import './Header.css';
import Logoimg from '../../Asserts/header logo.png'
import Buttons from '../Buttons/Buttons';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to={"i"}> <img src={Logoimg} alt="logo" /> </Link>
          <div className="toggle"><i class="bi bi-list"></i>
          </div>
        </div>
        <div className="menus">
          <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link  to={"/charity"}>Charity</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          </ul>

        </div>
        <div className="donatebtn">
        <Buttons Btntitle={"Donate Now "}/>
        </div>
      </header>
    )
  }
};
