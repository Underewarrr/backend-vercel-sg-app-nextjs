import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [email, setEmail] = useState('')


  useEffect(() => {
    const result = window.localStorage.getItem('email');
    setEmail(result);
  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Grow up Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user/panel">Panel</Nav.Link>
            <Nav.Link href="/user/services">Services</Nav.Link>

            <NavDropdown title="Account" id="collasible-nav-dropdown">
              {/*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <Link
                href="/user/balance/add"
                >
                Adicionar saldo
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link href="/user/login">Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
            href="/user/profile/view"
            >
              {email} 
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
