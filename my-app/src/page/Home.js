import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import NavbarPage from './NavbarPage'
import Clock from './Clock'
function Home(){
   return(
    <div>
      <NavbarPage />
         <div style={{textAlign:'center'}}>
            <Clock />
         </div>
    </div>

   ); 
}
export default Home;