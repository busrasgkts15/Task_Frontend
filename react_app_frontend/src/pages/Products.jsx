import { useEffect, useState } from "react";
import { GetAllProducts } from "../Services/ProductService";
import { Container } from "reactstrap";
import { Card, Col, Row, Image } from "antd";
import Meta from "antd/es/card/Meta";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Row gutter={[28, 28]} justify={"space-around"} style={{ marginTop: 15 }}>
        {products.map((item) => (
          <Col key={item.prodId} xs={24} sm={12} md={6} lg={6}>
            <Card style={{marginLeft:15 , marginRight: 15}}
              hoverable
              cover={<Image src="/src/assets/productImage/5.jpeg" />}
            >
              <Meta title={item.prodName} description={item.prodDescription} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
