import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar expand="lg" className="header-container shadow-sm bg-white sticky-top py-3">
        <Container fluid>
          {/* Logo and Brand */}
          <Navbar.Brand href="/" className="d-flex align-items-center me-0 me-lg-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt="SilentTalks Logo"
              className="logo-img me-2 me-md-3 animate-logo"
              width="40"
              height="40"
            />
            <span className="site-title fs-4 fw-bold d-none d-md-inline">SilentTalks</span>
          </Navbar.Brand>

          {/* Mobile Menu Button */}
          <Button
            variant="outline-primary"
            className="d-lg-none border-0"
            onClick={handleShow}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-3"></i>
          </Button>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto mx-lg-0">
              <Nav.Link href="/" className="nav-link px-3 py-2 mx-1 fw-medium">Home</Nav.Link>
              <Nav.Link href="/About" className="nav-link px-3 py-2 mx-1 fw-medium">About</Nav.Link>
              <Nav.Link href="/contact" className="nav-link px-3 py-2 mx-1 fw-medium">Contact</Nav.Link>
              <Nav.Link href="/SignKit" className="nav-link px-3 py-2 mx-1 fw-medium">SignKit</Nav.Link>
              
            </Nav>

            {/* Auth Buttons - Desktop */}
            <div className="d-flex gap-2 ms-lg-4">
              <Button href="/login" variant="outline-primary" className="btn-login px-3 px-lg-4 py-2">
                Login
              </Button>
              <Button href="/signup" variant="primary" className="btn-signup px-3 px-lg-4 py-2">
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     {/* Mobile Menu Button */}
<Button
  variant="outline-primary"
  className="d-lg-none border-0"
  onClick={handleShow}
  aria-label="Toggle navigation"
>
  <i className="bi bi-list fs-3"></i>
</Button>

{/* Desktop Navigation - Only visible on LG screens and above */}
<Navbar.Collapse id="basic-navbar-nav" className="justify-content-between" expand="lg">
  {/* ... rest of your desktop nav code ... */}
</Navbar.Collapse>

{/* Mobile Offcanvas - Only visible below LG screens */}
<Offcanvas show={showOffcanvas} onHide={handleClose} responsive="lg" placement="end">
  {/* ... rest of your offcanvas code ... */}
</Offcanvas>
    </>
  );
};

export default Header;