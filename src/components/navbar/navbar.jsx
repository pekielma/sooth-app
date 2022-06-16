import React from 'react'
import Nvavlink from '../navlink/navlink'
import './navbar.scss'
import { AiOutlineSearch } from 'react-icons/ai'


function navbar() {
  return (
    <nav className='navbar'>
    <div className='up-nav'>
    <div className='left-up'>
    <Nvavlink bold={true} content='ABOUT'/>
    <Nvavlink bold={true} content='CONSULTATIONS'/>
    </div>
    <h1>sooth</h1>
    <div className='rigth-up'>
    <a className='search-icon-a'><AiOutlineSearch className='search-icon' /></a>
    {/* <Nvavlink bold={false} content={<AiOutlineSearch />}/> */}
    <Nvavlink bold={true} content='CART'/>
    <Nvavlink bold={true} content='LOGIN'/>
    </div>

    </div>
    <div className='down-nav'>
    <Nvavlink bold={false} content='ACNE'/>
    <Nvavlink bold={false} content='SUN'/>
    <Nvavlink bold={false} content='ECZEMA'/>
    <Nvavlink bold={false} content='PSORIASIS'/>
    <Nvavlink bold={false} content='VITILIGIO'/>
    </div>

    </nav>
  )
}

export default navbar