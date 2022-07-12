import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/movies-app-logo.png'
import Styles from './Navbar.module.css';
import { AiFillStar } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';

export default function NavBar() {
  return (
    <header className={Styles.navbar}>
      <NavLink className={Styles.link} to="/">
        <span className={Styles.brand}>
          <img id="movies-logo" src={Logo} width="40px" height="40px" alt="" />
          MOVIES APP
        </span>
      </NavLink>
      <nav>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>
            <NavLink className={({ isActive }) => isActive ? Styles.activeItem : Styles.inactiveItem} to="/favs">
              <AiFillStar className={Styles.icon}/> 
              <span className={Styles.item}>Favs</span>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? Styles.activeItem : Styles.inactiveItem} to="/search">
              <IoSearch className={Styles.icon}/>
              <span className={Styles.item}>Search</span>
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}