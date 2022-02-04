import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

function HoneyCombs() {

  const honeyComb = `${process.env.MIX_APP_URL}/images/Honey-comb.png`

  const mobile = [
    
    {label: 'Мобильная Компания "Damu-Global"', link: '#'},
    {label: 'Онлайн-магазин', link: '#'},
    {label: 'Техподдержкка', link: '#'},
    {label: 'Мобильный Онлайн', link: '#'},
    {label: 'Мобильный Репетитор', link: '#'},
    {label: 'Мобильный Врач', link: '#'},
    {label: 'Мобильный Юрист', link: '#'},
    {label: 'Мобильный Бухгалтер', link: '#'},
    {label: 'Мобильный Налоговик', link: '#'},
    {label: 'Мобильный Репортер', link: '#'},
    {label: 'Мобильный Тренер', link: '#'},
    {label: 'Мобильный Дистрибьютор', link: '#'},
    {label: 'Мобильный Бизнес-тренер', link: '#'},
    {label: 'Мобильный Технолог', link: '#'},
    {label: 'Мобильная Няня', link: ''},
    {label: 'Мобильные Образовательные игры', link: ''},
    {label: 'CPnet.pro', link: ''},
  ]

  return (
    <div className="honey">
      <div className="honey_inner">
        <div className="honey_combs">
          {mobile.map((e, index) => {
            return (
              <div 
                className="comb" 
                key={index} >
                {/* <img src="" alt="" /> */}
                <img src={honeyComb} alt="" />
                <Link to={``} className="comb_link">
                  <span className="p-4">
                    {e.label}
                  </span>
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

