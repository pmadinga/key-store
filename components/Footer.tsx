import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
const Footer = () =>{
    return(
        <footer>
            <Container fluid className={styles.footer}>
                <div className={styles.social}>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Insta</li>
                    </ul>
                </div>
                <div>item</div>
                <div>item</div>
            </Container>       
        </footer>
    );
};

export default Footer;