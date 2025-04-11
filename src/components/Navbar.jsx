import React, { useEffect, useState } from 'react'
import LOGO from "../assets/images/logo.png"
import { MENU_LINKS } from '../utils/data'
import {Link} from "react-scroll"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth >= 768){
        setIsOpen(true);  // Always show menu on large screens
      }else{
        setIsOpen(false); // Hide menu by default on small screen
      }
    };

    //Set initial state based on screen size 
    handleResize();

    //Listen to resize events
    window.addEventListener("resize", handleResize);

    //Cleanup listener on components unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [])

  return (
    <nav className='container mx-auto sticky top-5 z-10'>
      <div className='flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
        {/* Logo */}
        <img className='h-12 ml-6 -mb-1 ' src={LOGO} alt="Logo" />

        {/* Hamburger Icon visible for only small screen */}
        <button
        className='block md:hidden text-[#333] mr-6 focus:outline-none'
        onClick={toggleMenu}>
          <svg className='w-6 h-6 '
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
            {isOpen ? (
              <path 
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth="2"
              d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path 
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth="2"
              d='M4 6h16M4 12h16m 6h7'
              />
            ) }
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`
        ${isOpen ? "flex" : "hidden"} 
        menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
              activeClass="active"
              to={item.to}
              smooth
              spy
              offset={item.offset}
              className="menu-item">
              {item.label}
              </Link>
            </li>
          ))
          }
        </ul>
        {/* Hire me button */}
        <button className='hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary
        rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105'>Hire me</button>
      </div>
    </nav>
  )
}

export default Navbar