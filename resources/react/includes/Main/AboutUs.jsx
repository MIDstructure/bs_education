import React from 'react';
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus my-4">
      <div className="container">
        <div className="aboutus_inner">
          <div className="heading">
            <h1 className="h1 fw-bold text-uppercase mb-1">
              О нас
            </h1>
            <span className="lead">
              Узнайте больше про нашу деятельность
            </span>
          </div>
          <div className="aboutus_body d-flex justify-content-between mt-5">
            <div className="text-center px-3 about_col">
              <img src="https://avatars.mds.yandex.net/i?id=05acb15e1f6705b1ece3f3812e629869-5280865-images-thumbs&n=13" alt="" width="100px" height="100px" />
              <article className="my-3 fs-2 text-bold">
                Качество
              </article>
              <small className="text-start text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam iste sint ipsa. 
                Impedit praesentium commodi a facilis eveniet vero? Ut.
              </small>
            </div>

            <div className="text-center px-3 about_col">
              <img src="https://avatars.mds.yandex.net/i?id=05acb15e1f6705b1ece3f3812e629869-5280865-images-thumbs&n=13" alt="" width="100px" height="100px" />
              <article className="my-3 fs-2 text-bold">
                Качество
              </article>
              <small className="text-start text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam iste sint ipsa. 
                Impedit praesentium commodi a facilis eveniet vero? Ut.
              </small>
            </div>

            <div className="text-center px-3 about_col">
              <img src="https://avatars.mds.yandex.net/i?id=05acb15e1f6705b1ece3f3812e629869-5280865-images-thumbs&n=13" alt="" width="100px" height="100px" />
              <article className="my-3 fs-2 text-bold">
                Качество
              </article>
              <small className="text-start text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam iste sint ipsa. 
                Impedit praesentium commodi a facilis eveniet vero? Ut.
              </small>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
  
}

export default AboutUs;
