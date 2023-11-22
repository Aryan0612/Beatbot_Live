import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import './Navbar.css';
import {BiHomeAlt,BiSearchAlt,BiRadio,BiCoffee} from 'react-icons/bi';


const Navbar = () => {
  return (
    <React.Fragment>
    <div className="navbar bg-base-100 bg-opacity-60 backdrop-blur z-50">
      <div className="mx-auto">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl items-center flex"
        >
          <img src={Logo} className="w-8 h-8 mx-2" />
          Music Player
        </Link>
      </div>
    </div>
    <nav>
    <ul>
      <div></div><li><a href="/" className="active"><BiHomeAlt size={50} /><span>Home</span></a></li>
      <li><a href="https://slider.kz/" target="_blank"><BiSearchAlt size={50}/><span>Search</span></a></li>
      <li><a href="https://r5k9v0.csb.app/"><BiRadio size={50}/><span>Radio</span></a></li>
      <li><a href="https://wave-music-player-psi.vercel.app/"><BiCoffee size={50}/><span>Chill</span></a></li>
      
    </ul>
  </nav>
  </React.Fragment>
  );
};

export default Navbar;
