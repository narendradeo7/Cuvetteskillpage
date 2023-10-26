import React from 'react'
import '../public/css/sidebar.css'
import {FaRegFile} from "react-icons/fa";
import {FiBarChart2} from "react-icons/fi";
import {PiMedalThin} from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ul className="sidemenu">
        <li className="sidenavigation"> <a href="#"> <FiBarChart2/>  Dashboard  </a> </li>
        <li className="sidenavigation active"><a href="#"><PiMedalThin/> Skill Test</a> </li>
        <li className="sidenavigation"><a href="#"><FaRegFile/>  Internships</a> </li>
    </ul>
      
    </div>
  )
}

export default Sidebar
