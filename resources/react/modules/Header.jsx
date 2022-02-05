import React, {useState} from 'react';

import Modall from "../components/Modall";
import { AuthModal } from "../components";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'


function Header() {

  const [modal, setModal] = useState(false);
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="display-6">BS-Education</Link>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/all-ads" className="nav-link active" aria-current="page" href="#">Все курсы</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">Техподдержка</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" role="button"  aria-expanded="false">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {Cookies.get('logged_in')
            ? 
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="btn btn-outline-primary me-2" to="/create-ads">
                    Создать курс
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-dark" to="/profile">
                    Профиль
                  </Link>
                </li>
              </ul>
            : 
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={e => setModal(true)}
              >
                Вход
            </button>
          }
    
        </div>
      </nav>
      <Modall open={modal}  close={setModal}>
        <AuthModal/>
      </Modall> 
    </>
  );
}

export default Header;


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className="container">

//   <Link to="/" className="navbar-brand pe-auto">Navbar</Link>
//   <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <Link to="*" className="nav-link pe-auto" aria-current="page">Home</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="*" className="nav-link pe-auto">Link</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="*" className="nav-link pe-auto" aria-current="page">Home</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="*" className="nav-link pe-auto">Link</Link>
//       </li>
//     </ul>
//   </div>
//     <button className="navbar-toggler me-3  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <button className="btn btn-outline-primary" onClick={e => setModal(true)}>
//       Вход
//     </button>
//   </div>
// </nav>