import React from 'react';
import { Card, Button } from 'react-bootstrap'


export default function AdsCard() {

  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src="https://wallpaperaccess.com/full/1285952.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
  );
}
