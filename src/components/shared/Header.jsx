import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles/header.css'
import {AiOutlineMenuFold} from 'react-icons/ai'


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }



  return (
    <header className='header'>
        <h1 className='header_title'>
            <Link className=' header_link_title' to='/'>e-commerce</Link>
        </h1>
        <AiOutlineMenuFold onClick={handleShowMenu} className='header_icon'/>
        <nav className={showMenu ? 'header_nav header_nav_show' : 'header_nav'}>
            <ul className='header_list'>
                <li className='header_item'><NavLink  className='header_link' to='/login'>Login</NavLink></li>
                <li className='header_item'><NavLink  className='header_link' to='/purchases'>Purchases</NavLink></li>
                <li  className='header_item'><NavLink to='/cart'  className='header_link' >Cart</NavLink></li>
            </ul>
        </nav>

    </header>
  )
}

export default Header
