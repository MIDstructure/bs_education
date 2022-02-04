import React from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp({setCurrent}) {

  const navigate = useNavigate()

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleInput = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get("sanctum/csrf-cookie")
    .then(e => {
      console.log("cookie get");
      axios.post("api/register", user)
      .then(e => {
        console.log("u regged ");
        navigate('/profile')
        navigate(0)
      })
    })
    .catch(e => {
      console.log(e);
    })
  };


  return (
    <div className="card">
      <div className="card-body p-5">
        <h2 className="text-uppercase text-center mb-5">Создайте аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input name="name" value={user.name} onChange={handleInput} type="text" id="form3Example1cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example1cg">Имя</label>
          </div>
          <div className="form-outline mb-4">
            <input name="email" value={user.email} onChange={handleInput} type="email" id="form3Example3cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example3cg">Почта</label>
          </div>
          <div className="form-outline mb-4">
            <input name="password" value={user.password} onChange={handleInput} type="password" id="form3Example4cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
          </div>
          <div className="form-outline mb-4">
            <input name="password_confirmation" value={user.password_confirmation} onChange={handleInput} type="password" id="form3Example4cdg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cdg">Подтверждение пароль</label>
          </div>
          <div className="form-check d-flex justify-content-center mb-5">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
            <label className="form-check-label d-flex align-items-center" htmlFor="form2Example3g">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block btn-lg text-light">Создать аккаунт</button>
          </div>
          <p className="text-center text-muted mt-5 mb-0">Уже есть аккаунт?<a onClick={e => setCurrent(1)} className="fw-bold text-body ms-2"><u>Войти</u></a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp