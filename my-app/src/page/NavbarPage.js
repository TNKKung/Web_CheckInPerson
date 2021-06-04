import React from 'react'
import { FaUser } from 'react-icons/fa'
import './Navbar.css'

function NavbarPage(){

   return(
    <div>
        <div class="topnav">
        <div class="topnav-centered">
            <a className='active' href="home">Check In</a>
        </div>
        
        <a href="classRoom">Class Room</a>
        <a href="registerSubject">Register Subject</a>
        
        <div class="topnav-right">
            <a href="profile"><FaUser size='25px' /></a>
            <a href="logout">SignOut</a>
            
        </div>
    </div>
    </div>

   ); 
}

export default NavbarPage;