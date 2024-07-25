// import React from 'react'
import login_icon from "./assets/login.svg"
import sign_icon from './assets/sign.svg'
import home_icon from './assets/home_icon.svg'
import about_icon from './assets/about.svg'
import call_icon from './assets/call.svg'
import cart_icon from './assets/cart.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='div'>
      <nav className='nav'>
        <ul>
        <li>
          <img src={home_icon} alt="" />Home</li>
          <li >
            <img src={login_icon} alt="" />Login </li>
          <li>
            <img src={sign_icon} alt="" />Sign up</li>
          <input type="text" placeholder='Search...'  className='search'/>
          <li>
            <img src={call_icon} alt="" className='cl'/>Contacts</li>
          <li>
          <img src={about_icon} className='abt' />About us</li>
          <li>
            <img src={cart_icon} alt="" />Cart</li>
        </ul>
      </nav>
      {/* <button>Add</button> */}
      </div>
  )
}

export default Navbar