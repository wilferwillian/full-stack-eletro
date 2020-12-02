import{Navbar,nav, Nav} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export default function menu(){
return(
        <Navbar className="navbar-light"bg="danger"expand="lg"fixed="top">
            <Navbar.Brand>
                Full Stack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria aria-controls="itens menu"/>
            <Navbar.Collapse id="itens menu">
                <Nav>
                <Nav.Item>
                    <Nav.link as={Link} href="/"to="/">Página Inicial</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link as={Link} href="/produtos"to="/produtos">Produtos</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link as={Link} href="/contatos"to="/contatos">Contatos</Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link as={Link} href="/"to="/"></Nav.link>
                </Nav.Item>
                <Nav.Item>
                <Nav.link as={Link} href="/"to="/"></Nav.link>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};