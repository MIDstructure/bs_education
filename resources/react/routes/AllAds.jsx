import React from 'react';
import { Row, Container } from "react-bootstrap";
import { AdsCard } from "../components";

function AllAds() {
  return (
    <Container>
      <Row xs={1} lg={3}>
        {Array(6).fill(123).map((obj,index)=>{
          return(
            <AdsCard key={index} />
          )
        })}
      </Row>
    </Container>
  )
}

export default AllAds;
