import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
     <Nav className='navbar'>
       <NavLink to="/">
         <img height={120} src='https://www.tsilhqotin.ca/wp-content/uploads/2022/03/tsilhqotin_radio-removebg-preview-1.png' alt='TNG Radio'/><Bars />
       </NavLink>
       <Bars />
       <NavMenu>
         <NavLink to="/about" activeStyle>
           About  
         </NavLink>
         <NavLink to="/Stream" activeStyle>
           Steam  
         </NavLink>
         <NavLink to="/Links" activeStyle>
           Links
         </NavLink>
         <NavLink to="/contactUs" activeStyle>
           Contacts
         </NavLink>
           
         {/* 2nd nav */}
         {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
       </NavMenu>  
       <NavBtn>
         <NavBtnLink to="/signin">Sign In</NavBtnLink>
       </NavBtn>
     </Nav>   
    </>
  );
};

export default Navbar