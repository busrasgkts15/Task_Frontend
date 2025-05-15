import { Container, Row, Col, Button } from "reactstrap";
import { FaTools, FaShieldAlt, FaUsers } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <div className="hero-container">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source
            src="/src/assets/videos/RadyasyonCıhazları.mp4"
            type="video/mp4"
          />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">Geleceği Şekillendiren Teknoloji</h1>
          <p className="hero-subtitle">Radyoaktif cihaz çözümlerinde öncüyüz</p>
        </div>
      </div>

      {/* Hizmet Kartları */}
      <Container className="py-5">
        <Row className="text-center">
          <Col md="4" className="mb-4">
            <FaTools size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Teknik Çözümler</h5>
            <p>Uzman mühendis kadrosuyla entegre sistem çözümleri sunuyoruz.</p>
          </Col>
          <Col md="4" className="mb-4">
            <FaShieldAlt size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Güvenlik</h5>
            <p>Radyoaktif alanlarda yüksek güvenlikli ekipmanlar.</p>
          </Col>
          <Col md="4" className="mb-4">
            <FaUsers size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Destek</h5>
            <p>7/24 teknik destek ve danışmanlık hizmetiyle yanınızdayız.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
