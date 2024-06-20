import React from "react";
import { Row, Col } from "react-bootstrap";
import productCatalog from "../productCatalog";
import Item from "../components/Item";

function Homepage() {
  return (
    <div>
      <h1>New Finds</h1>
      <Row>
        {productCatalog.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={3}>
            <Item item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homepage;
