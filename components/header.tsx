import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import config from '../config'
import Link from 'next/link'

const Header: React.FunctionComponent = () => (
  <header>
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Link href="/" passHref>
        <Navbar.Brand>{config.general.siteName}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link href="/events" passHref>
            <Nav.Link>Події</Nav.Link>
          </Link>
          <Link href="/blog" passHref>
            <Nav.Link>Блог</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
