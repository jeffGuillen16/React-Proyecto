import React from 'react';
import './NavFloat.scss';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";

function NavFloat() {

    return (

        <div className='navFloat'>
            <a className='icon' href='/'>
                <RiFacebookCircleLine />
            </a> 
            <a className='icon' href='/'>
                <FaWhatsapp />
            </a> 
            <a className='icon' href='/'>
                <FaInstagram />
            </a> 
            <a className='icon' href='/'>
                <BsTiktok />
            </a> 
        </div>
      );
}

export default NavFloat;