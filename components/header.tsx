import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import config from '../config'

const Header: React.FunctionComponent = () => (
  <header>
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/">{config.general.siteName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/events">Події</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
