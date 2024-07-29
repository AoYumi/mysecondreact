import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <nav className = "navBar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="https://www.youtube.com/watch?v=hqURBTpvh0A">
                        <img
                            alt=""
                            src="https://media.discordapp.net/attachments/520468614000934925/1264599222960001136/image.png?ex=66a9014d&is=66a7afcd&hm=e5ac90db7e1d9a6291924601b672640db47a1cfc54e4e54cf20ef26d180b5c69&=&format=webp&quality=lossless&width=610&height=525"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        いやぁぁ~~ country roaaaaad take me hoooome to the pplaaaaaace
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/mysecondreact">Home</Nav.Link>
                        <NavDropdown title="Dito ang employees menu aho" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/mysecondreact/add">Add Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/mysecondreact/employees">Employees</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            </nav>
        </div>
    )
}

export default NavBar