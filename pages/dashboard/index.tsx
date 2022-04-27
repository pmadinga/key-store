import { NextPage } from "next";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import styles from "../../styles/Dashboard.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import Anouncements from "./Announcements";
import Parcitipants from "./Participants";
import { useState } from "react";
import Blog from "./Blog";
import AdminUsers from "./AdminUsers";
import Head from "next/head";

const Dashboard: NextPage = () =>{
    const [showComponent, setShowComponent] = useState<any>("start");
    return(
        <>
            <Head>
                
            </Head>
            <Container fluid >
            <Row>
                <Col lg="2" className={`${styles.sidenav} px-0`}>
                    <IconContext.Provider value={{color: "white", size: "40px"}}>
                        <BiMenuAltRight className={styles.menu_icon}/>
                    </IconContext.Provider>
                    <div className={styles.side_links}>
                        <Button className={styles.side_btn} onClick={ () => {setShowComponent("start");} }>Participants</Button>
                        <Button className={styles.side_btn} onClick={ () => {setShowComponent("ann");} }>Anouncements</Button>
                        <Button className={styles.side_btn} onClick={ () => {setShowComponent("blog");} }>Blog</Button>
                        <Button className={styles.side_btn} onClick={ () => {setShowComponent("users");} }>Users</Button>
                    </div>
                </Col>
                <Col>
                    { showComponent === "start" && <Parcitipants/> }
                    { showComponent === "ann" && <Anouncements/> }
                    { showComponent === "blog" && <Blog/> }
                    { showComponent === "users" && <AdminUsers/> }
                </Col>
            </Row>
        </Container>
        </>
        
    );
};

export default Dashboard; 