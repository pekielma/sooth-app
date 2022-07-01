import React, {useState} from 'react'
import Navlink from '../navlink/navlink'
import style from './navbar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { auth } from "../../base";
import { signOut } from "firebase/auth";



function Navbar(props) {

  const handleLogout = async () => {
    localStorage.clear();
    await signOut(auth);
  };

  return (
    <nav className={style.navbar}>
    <div className={style.upNav}>
    <div className={style.leftUp}>
    <Navlink bold={true} herf='/' content='ABOUT'/>
    <Navlink bold={true} herf='/consultations' content='CONSULTATIONS'/>

    </div>
    <h1>sooth</h1>
    <div className={style.rigthUp}>
    <a className={style.searchIconLink}><AiOutlineSearch className={style.searchIcon} /></a>
    <Navlink openModal={props.openModal} passFunction={true} bold={true} content='CART'/>
    {
      props.isLoggedIn ?  <Navlink herf='logout' onClick={handleLogout} bold={true} content='LOGOUT'/> :
      <Navlink herf='login' bold={true} content='LOGIN'/>
    }
    
    </div>

    </div>
    <div className={style.downNav}>
    <Navlink bold={false} content='ACNE'/>
    <Navlink bold={false} content='SUN'/>
    <Navlink bold={false} content='ECZEMA'/>
    <Navlink bold={false} content='PSORIASIS'/>
    <Navlink bold={false} content='VITILIGIO'/>
    </div>
    </nav>
  )
}

export default Navbar