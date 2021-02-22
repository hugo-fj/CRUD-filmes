import {Jumbotron,Container,Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


function Header(){
    return(

        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="/" >
                <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><path d="m476 64h-440a19.994 19.994 0 0 0 -20 20v28h480v-28a19.994 19.994 0 0 0 -20-20z" fill="#fff"/><circle cx="256" cy="280" fill="#fff" r="96"/><g fill="#d3d3d3"><path d="m476 56h-440a28.031 28.031 0 0 0 -28 28v344a28.031 28.031 0 0 0 28 28h440a28.031 28.031 0 0 0 28-28v-344a28.031 28.031 0 0 0 -28-28zm12 372a12.01 12.01 0 0 1 -12 12h-440a12.01 12.01 0 0 1 -12-12v-308h464zm0-324h-464v-20a12.01 12.01 0 0 1 12-12h440a12.01 12.01 0 0 1 12 12z"/><path d="m40 96h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/><path d="m72 96h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/><path d="m104 96h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/><path d="m256 176a104 104 0 1 0 104 104 104.118 104.118 0 0 0 -104-104zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1 -88 88z"/><path d="m275.669 241.891a8 8 0 0 0 -10.778 3.44l-32 62a8 8 0 1 0 14.218 7.338l32-62a8 8 0 0 0 -3.44-10.778z"/><path d="m220.8 241.6a8 8 0 0 0 -11.2 1.6l-24 32a8 8 0 0 0 0 9.6l24 32a8 8 0 1 0 12.8-9.6l-20.4-27.2 20.4-27.2a8 8 0 0 0 -1.6-11.2z"/><path d="m291.2 241.6a8 8 0 0 0 -1.6 11.2l20.4 27.2-20.4 27.2a8 8 0 1 0 12.8 9.6l24-32a8 8 0 0 0 0-9.6l-24-32a8 8 0 0 0 -11.2-1.6z"/></g></g></svg>
                </Navbar.Brand>

                <Nav>    
                    <Nav.Link className=" mr-sm-8" href="/" >Home</Nav.Link>
                    <Nav.Link className=" mr-sm-8" href="/lista">Lista de Filmes</Nav.Link>
                </Nav>
                
            </Navbar>
            <Jumbotron fluid>
                <Container>
                    <h1>Aplicação CRUD   </h1>
                    <p>CRUD simples utilizando - React,React-Bootstrap,Styled-components,Node,Express,Body-parser,Nodemon,Mysql.</p>
                </Container>
            </Jumbotron>

            

        </div>
    )
}

export default Header;