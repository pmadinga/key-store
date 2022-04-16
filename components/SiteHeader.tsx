import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link  from "next/link";
import Image from "next/image";
import styles from "../styles/SiteHeader.module.css";
import logo from "../images/logo.svg";

const SiteHeader = () =>{
    return(
        <>
            <Navbar bg="light" expand="lg" className="py-0">
                <Container fluid>
                    <Navbar.Brand href="/" className={styles.navbar_brand}> 
                        <Image 
                            alt="Logo"
                            width={50} 
                            height={50} 
                            src={logo}
                        />
                        <span className={styles.brand_name}>Key Store</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href="#" passHref>
                                <Nav.Link>About</Nav.Link>
                            </Link>
                            <Link href={"/dashboard"} passHref>
                                <Nav.Link className={styles.sign_in}>Sign In</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default SiteHeader;