import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function singleBook(props) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Price: {props.price} $</Card.Text>
        <Button variant="primary">Buy Book</Button>
      </Card.Body>
    </Card>
  );
}

export default singleBook;
