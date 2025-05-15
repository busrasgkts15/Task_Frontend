import { Col, Container, Row } from "reactstrap";
import { Button, Divider } from "antd";
import { useState } from "react";

const About = () => {
  const [selectedSection, setSelectedSection] = useState("Hakkımızda");

  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-start py-5">
        <Container>
          <Row>
            {/* Sol Menü ile içeriklerin değişmesi için state kullanıldı */}
            <Col sm="4" md="4" lg="3" className="mb-4">
              <div className="d-flex flex-column gap-3">
                <Button
                  color="secondary"
                  onClick={() => setSelectedSection("Hakkımızda")}
                  style={{ border: "none" }}
                >
                  Hakkımızda
                </Button>
                <Button
                  color="secondary"
                  onClick={() => setSelectedSection("Belgeler")}
                  style={{ border: "none" }}
                >
                  Belgeler
                </Button>
                <Button
                  color="secondary"
                  onClick={() => setSelectedSection("Görseller")}
                  style={{ border: "none" }}
                >
                  Üretim & AR-GE Görselleri
                </Button>
              </div>
            </Col>

            {/* Sağ İçerik selected ile filtrelendi */}
            <Col sm="8" md="8" lg="9">
              {selectedSection === "Hakkımızda" && (
                <div id="Hakkımızda">
                  <Divider>
                    <h4>Hakkımızda</h4>
                  </Divider>
                  <p>
                    ZS firması 2010 yılından bu yana radyasyon ölçüm ve izleme
                    cihazları geliştiren lider bir teknoloji firmasıdır. Sağlık,
                    endüstri, nükleer enerji ve araştırma sektörlerine yönelik
                    yüksek hassasiyetli çözümler sunan firma, 25 ülkede faaliyet
                    göstermektedir.
                  </p>
                </div>
              )}

              {selectedSection === "Belgeler" && (
                <div id="Belgeler">
                  <Divider>
                    <h4>Belgeler</h4>
                  </Divider>
                  <p>
                    Firmamız ISO 9001, CE ve TSE belgelerine sahip olup, tüm
                    ürünlerimiz kalibrasyon sertifikalıdır. Kalite yönetim
                    süreçlerimiz uluslararası standartlara uygundur.
                  </p>
                </div>
              )}
              {selectedSection === "Görseller" && (
                <div id="Görseller">
                  <Divider>
                    <h4>Üretim & Ürün Görselleri</h4>
                  </Divider>
                  <img
                    src="/src/assets/img/üretim.png"
                    alt=""
                    style={{ width: 300 }}
                  />
                  <img
                    src="/src/assets/img/dozimetre.png"
                    alt=""
                    style={{ width: 300 }}
                  />
                  <img
                    src="/src/assets/img/radyasyon ölçüm.jpg"
                    alt=""
                    style={{ width: 300 }}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
