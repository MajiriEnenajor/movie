import React from 'react'
import { useState } from 'react';
import { Menu, Nav, Hamburger, MenuLink } from './styles'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/liked">Liked Movies</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar
