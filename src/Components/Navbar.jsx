import React from 'react'
import '../public/css/navbar.css'
import logo from '../public/images/cuvettelogo.svg'
import profileimg from "../public/images/profileimg.png"
import {FaAngleDown} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar-container">

        <div className="navleft">

          <a href="http://localhost:3000/" className="logo navlogo">
            <img src={logo} alt="cuvette logo" className="logoimg" />
          </a>

        </div>

        {/* topbar  */}

        <div className="topbar">

          <div className="profiledropdown">
            <img src={profileimg} alt="profileimg" className="profileimg" />
            <div className="username">Siddharth Jain</div>
            <div className="dropdown"><FaAngleDown/></div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar

