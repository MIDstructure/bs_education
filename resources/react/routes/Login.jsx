import axios from "axios";
import * as React from 'react';
import { loginValid } from "../service/Validation";
import Cookies from 'js-cookie'





function Login({setCurrent}) {

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const [valid, setValid] = React.useState({
    valid: false,
    emailError: '',
    passwordError: ''
  })

  const handleInput = async e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  } 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const val = await loginValid.isValid(user)
    // const err = loginValid.validate(user, {abortEarly: false})
    // .then(e => {
    //   console.log(e);
    // })
    // .catch(e => {
    //   console.log(e.inner.map(e => {return e.message}), "errors");
    //   setValid({...valid, error: e.message})
    // })
    axios.post("api/login")
    .then(e => {
      console.log("вошел");
      Cookies.set('logged_in', true)
    })
  };


  return (
    <div className="card">
      <div className="card-body p-5">
        <h2 className="text-uppercase text-center mb-5">Войти</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input name="email" value={user.email} onChange={handleInput} type="email" id="form3Example3cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example3cg">Почта</label>
          </div>
          <div className="form-outline mb-4">
            <input name="password" value={user.password} onChange={handleInput} type="password" id="form3Example4cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
          </div>
          <div className="form-check d-flex justify-content-center mb-5">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
            <label className="form-check-label d-flex align-items-center " htmlFor="form2Example3g">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block btn-lg text-light">Войти</button>
          </div>
          <p className="text-center text-muted mt-5 mb-0">Еще нет аккаунта<a onClick={e => setCurrent(2)} className="fw-bold text-body ms-2"><u>Создать</u></a></p>
        </form>
      </div>
    </div>

  );
}

export default Login