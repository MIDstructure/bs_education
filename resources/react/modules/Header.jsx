import React, {useState} from 'react';

import Modall from "../components/Modall";
import { AuthModal } from "../components";
import { Link } from "react-router-dom";


function Header() {



  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
       
          <Link to="/" className="navbar-brand pe-auto">Navbar</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="*" className="nav-link pe-auto" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="*" className="nav-link pe-auto">Link</Link>
              </li>
              <li className="nav-item">
                <Link to="*" className="nav-link pe-auto" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="*" className="nav-link pe-auto">Link</Link>
              </li>
            </ul>
          </div>
            <button className="navbar-toggler me-3  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <button className="btn btn-outline-primary" onClick={e => setModal(true)}>
              Вход
            </button>
          </div>
      </nav>

      <Modall open={modal}  close={setModal}>
        <AuthModal/>
      </Modall> 
    </>
  );
}

export default Header;