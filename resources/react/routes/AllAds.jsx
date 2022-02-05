import React from 'react';
import { Row, Container } from "react-bootstrap";
import { AdsCard } from "../components";

function AllAds() {
  return (
    <Container>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
        {Array(6).fill(123).map((obj,index)=>{
          return(
            <AdsCard key={index} />
          )
        })}
      </div>
    </Container>
  )
}

export default AllAds;
