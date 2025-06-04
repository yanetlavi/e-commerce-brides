import { Container, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Container>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Pages</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
