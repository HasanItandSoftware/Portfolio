/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar shadow-stone-50 shadow-md  pl-4 bg-teal-700 text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services">Contact</Link></li>
        <li><Link to="/services">Project</Link></li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case rounded-sm" style={{fontSize: "28px"}}>Hasan It & Software</Link>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services">Contact</Link></li>
        <li><Link to="/services">Project</Link></li>
      </ul>
    </div>

  </div>                                                                                                                        
  )
}

export default Navbar