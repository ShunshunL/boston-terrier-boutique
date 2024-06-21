import React from "react";
import { Row, Col } from "react-bootstrap";
import productCatalog from "../productCatalog";
import Item from "../components/Item";

function Homepage() {
  return (
    <div>
      <h1>Our Favorites</h1>
      <Row>
        {productCatalog.map((product) => (
          <Col key={product._id} xs={12} md={6} lg={4}>
            <Item item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homepage;
