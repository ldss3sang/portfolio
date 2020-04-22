import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useAuth0 } from "../../services/react-auth0-spa";

import "../../styles/shared/_header.scss";

const BsNavItem = (props) => {
  const { link, title } = props;

  return (
    <NavItem className="port-navbar-item">
      <NavLink className="port-navbar-link" href={link}>
        {title}
      </NavLink>
    </NavItem>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const isAuth = isAuthenticated
    ? isAuthenticated
    : props.isAuthenticated === "true"
    ? true
    : false;

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Sangseok Doe
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <BsNavItem link="/" title="Home" />
            <BsNavItem link="/about" title="About" />
            <BsNavItem link="/portfolios" title="Portfolio" />
            <BsNavItem link="/blogs" title="Blog" />
            <BsNavItem link="/resume" title="Resume" />
            <NavItem className="port-navbar-item">
              {!isAuth && (
                <span
                  className="nav-link port-navbar-link clickable"
                  onClick={() => loginWithRedirect({})}
                >
                  Login
                </span>
              )}
            </NavItem>
            <NavItem className="port-navbar-item">
              {isAuth && (
                <span
                  className="nav-link port-navbar-link clickable"
                  onClick={() => logout()}
                >
                  Logout
                </span>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
