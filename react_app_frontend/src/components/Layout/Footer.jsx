import { Container, Row, Col } from "reactstrap";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaFax,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-ligth text-dark pt-5 pb-3">
        <Container>
          <Row>
            <Col sm="4" md="4" lg="4" className="mb-1 text-md-start">
              <h5 className="fw-bold">ZS</h5>
              <p className="text-muted">
                © Copyright 2010 by ZS Bütün Hakları Saklıdır.
              </p>
            </Col>

            <Col
              sm="4"
              md="4"
              lg="4"
              className="menu-title mt-3 text-secondary text-md-start"
            >
              <h6 className="text-uppercase fw-bold mb-3">Kurumsal</h6>
              <p>
                <a href="/about" className="menu-title me-2">
                  Hakkımızda
                </a>
              </p>

              <p>
                <a href="/contact" className="menu-title me-2">
                  İletişim
                </a>
              </p>
              <p>
                <a href="/">
                  <FaXTwitter size={20} color="gray" className="me-2" />
                </a>
                <a href="/">
                  <FaInstagram size={20} color="purple" className="me-2" />
                </a>
                <a href="/">
                  <FaLinkedin size={20} className="me-2" />
                </a>
              </p>
            </Col>
            <Col
              sm="4"
              md="4"
              lg="4"
              className="menu-title mt-3 text-secondary text-md-start"
            >
              <h6 className="text-uppercase fw-bold mb-3">Bize Ulaşın</h6>
              <p>
                <FaPhone className="me-2" /> (0216) 482 00 36
              </p>

              <p>
                <FaMapMarkerAlt className="me-2" /> Bağdat Cad. Trion Plaza
                No:505/10 <br />
                34846 Maltepe / İstanbul
              </p>
              <p>
                <FaEnvelope className="me-2" /> info@ZS.com.tr
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
