import React from "react";
import { Card } from "react-bootstrap";

function Item({ item }) {
  return (
    <Card className="my-3 p-3">
      <Card.Img variant="top" src={item.image} className="card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text as="h3">${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
