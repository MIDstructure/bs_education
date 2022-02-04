import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'



function SideBar({setCurrent, current}) {

  const navigate = useNavigate()
  
  const fun = e => {
    axios.post("api/logout")
    .then(e => {
      Cookies.remove('logged_in')
      alert("logout")
      navigate('/')
      navigate(0)
    })
  }

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 280}}>
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Sidebar</span>
      </a> */}
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <div className={current == 1 ? "nav-link active pe-pointer" : "nav-link link-dark pe-pointer"} aria-current="page" onClick={e => setCurrent(1)}>
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
            Профиль
          </div>
        </li>
        <li>
          <div className={current == 2 ? "nav-link active pe-pointer" : "nav-link link-dark pe-pointer"} onClick={e => setCurrent(2)}>
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
            Мои курсы
          </div>
        </li>
        <li>
          <div className={current == 3 ? "nav-link active pe-pointer" : "nav-link link-dark pe-pointer"} onClick={e => setCurrent(3)}>
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
            Оплата
          </div>
        </li>
        <li>
          <div className={current == 4 ? "nav-link active pe-pointer" : "nav-link link-dark pe-pointer"} onClick={e => setCurrent(4)}>
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
            Контакты
          </div>
        </li>
        <li>
          <div className={current == 4 ? "nav-link active pe-pointer" : "nav-link link-dark pe-pointer"} onClick={fun}>
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
            Выйти
          </div>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        {/* <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a> */}
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

  )
}

export default SideBar;
