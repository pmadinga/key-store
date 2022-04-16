import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "../styles/DashSiteHeader.module.css";

const DashHeader = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="#home">Admin Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Participants</Nav.Link>
                <Nav.Link href="#link"></Nav.Link>
                <div className={styles.user}>
                    <IconContext.Provider value={{color: "white", size: "35px"}}>
                        <FaUserCircle/>
                    </IconContext.Provider>
                    {/* <p className={styles.user_name}>User</p> */}
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default DashHeader;