import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Layout from "../components/Layout";
const SiteHeader = () =>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
export default SiteHeader;