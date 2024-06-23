import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

function Item({ item }) {
  return (
    <Card className="my-3 p-3 border-0 shadow-card">
      <Card.Img variant="top" src={item.image} className="card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text as="div">
          <div className="my-3">
            <Rating rating={item.rating} numOfReviews={item.numReviews} />
          </div>
        </Card.Text>
        <Card.Text as="h3">${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
