import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';


export default class BarterNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar" color="light" light expand="md">
       <NavbarBrand className="barter-brand-nav" href="/">Barter</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/search">Search</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/profile">Profile</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  } 
}