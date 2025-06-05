import { Container, Button, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

export default function Header() {
  const expand = "lg";

  const navLinks = (
    <Nav className="me-3">
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Shop</Nav.Link>
      <Nav.Link href="#action2">Blog</Nav.Link>
      <NavDropdown title="Pages" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  return (
    <Navbar expand={expand} className="bg-body-tertiary">
      <Container className="position-relative d-flex align-items-center">
        {/* LEFT: Nav & Search for large screens */}
        <div className="d-none d-lg-flex align-items-center flex-grow-1">
          {navLinks}
        </div>

        {/* CENTER: Brand */}
        <div className="position-absolute start-50 translate-middle-x">
          <Navbar.Brand href="/home" className="m-0">Trousseau</Navbar.Brand>
        </div>

        {/* RIGHT: Toggle Button for mobile */}
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="ms-auto d-lg-none"
        />

        {/* OFFCANVAS for small screens */}
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex justify-content-end">
            <div className="d-lg-none">
              {navLinks}
            </div>
            <Form className="d-flex mt-3 mt-md-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
