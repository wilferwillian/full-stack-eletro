import {Navbar,Nav} from 'react-bootstrap';
export default function Menu() {
return (
        <Navbar className="navbar-dark"bg="danger"expand="lg"fixed="top">
            <Navbar.Brand>
                Full Stack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-Menu"/>
            <Navbar.Collapse id="item-Menu">
                <Nav className="ml-auto m-3">
                <Nav.Item>
                <Nav.Link href="/"to ="/"> Página Inicial</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/produtos"to ="/produtos"> Produtos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  href="/contatos"to ="/contatos"> Contatos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/pedidos"to ="/pedidos"> Pedidos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/lojas"to ="/lojas"> Nossas lojas</Nav.Link>
                </Nav.Item>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
};