import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

function HoneyCombs() {

  return (
    <div className="honey">
      <div className="honey_inner">
        <div className="honey_combs">
          {Array(17).fill(17).map((e, index) => {
            return (
              <div 
                style={{backgroundImage: `url(https://idg.net.ua/blog/wp-content/uploads/radial-gradient-top-left.png)`}}
                className="comb" 
                key={index} >
                {/* <img src="" alt="" /> */}
                <Link to={``} className="comb_link">
                  Мобильный бизнес-тренер
                </Link>
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HoneyCombs;

