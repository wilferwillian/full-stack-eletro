import{Navbar,Nav} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export default function Menu(){
return(
        <Navbar className="navbar-light"bg="danger"expand="lg"fixed="top">
            <Navbar.Brand>
                Full Stack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria aria-controls="item-menu"/>
            <Navbar.Collapse id="item-menu">
                <Nav >
                <Nav.Item>
                <Nav.link href="/"to="/">Página Inicial</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link  href="/produtos"to="/produtos">Produtos</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link  href="/contatos"to="/contatos">Contatos</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link  href="/"to="/"></Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link  href="/"to="/"></Nav.link>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};