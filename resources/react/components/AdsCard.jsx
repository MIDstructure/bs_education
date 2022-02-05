import React from 'react';
import { Card, Button } from 'react-bootstrap'


export default function AdsCard() {

  return (
    <div class="col">
      <div class="card h-100">
        <img src="https://wallpaperaccess.com/full/1285952.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div style={{maxWidth: '100px'}} className="my-2 mx-auto">
          <button className="btn btn-primary m-auto">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
