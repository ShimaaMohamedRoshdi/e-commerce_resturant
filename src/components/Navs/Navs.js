import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../assets/logo (2).png'

function BasicExample() {
  return (
    <Navbar expand="lg"  >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">explore food</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">faq</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">254836</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;