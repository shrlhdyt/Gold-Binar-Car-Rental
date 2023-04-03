import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffNav() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key="sm" bg="light" expand="lg" fixed="top" className="mb-3">
          <Container className="NavbarNav" fluid>
            <Navbar.Brand href="#">
              <button type="button" className="btn btn-primary">
                BCR
              </button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#our-service">Our Service</Nav.Link>
                  <Nav.Link href="#Whyus">Why Us</Nav.Link>
                  <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#FAQ">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffNav;
