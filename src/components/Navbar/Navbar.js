import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';

import {Button} from '../../GlobalStyles.style'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click)
  }

  const showButton = () => {
    if(window.innerWIdth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(()=> {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu} >
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>  
                ): (
                  <NavBtnLink to='sign-up'>
                    <Button onClick={handleClick} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Navbar