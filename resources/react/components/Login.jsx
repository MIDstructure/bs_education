import * as React from 'react';
import { loginValid } from "../service/Validation";





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
    const val = await loginValid.isValid(user)
    const err = loginValid.validate(user, {abortEarly: false})
    .then(e => {
      console.log(e);
    })
    .catch(e => {
      console.log(e.inner.map(e => {return e.message}), "errors");
      setValid({...valid, error: e.message})
    })
  };


  return (
    // <div className="card" style={{borderRadius: '1rem'}}>
    //   <div className="card-body p-5 text-center">
    //     <div className="mb-md-5 mt-md-4 pb-5">
    //       <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //       <p className="mb-5">Please enter your login and password!</p>
    //       <div className="form-outline form-white mb-4">
    //         <input type="email" id="typeEmailX" className="form-control form-control-lg" />
    //         <label className="form-label" htmlFor="typeEmailX">Email</label>
    //       </div>
    //       <div className="form-outline form-white mb-4">
    //         <input type="password" id="typePasswordX" className="form-control form-control-lg" />
    //         <label className="form-label" htmlFor="typePasswordX">Password</label>
    //       </div>
    //       <p className="small mb-5 pb-lg-2"><a className="" href="#!">Forgot password?</a></p>
    //       <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>
    //       <div className="d-flex justify-content-center text-center mt-4 pt-1">
    //         <a href="#!" className=""><i className="fab fa-facebook-f fa-lg" /></a>
    //         <a href="#!" className=""><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
    //         <a href="#!" className=""><i className="fab fa-google fa-lg" /></a>
    //       </div>
    //     </div>
    //     <div>
    //       <p className="mb-0">Don't have an account? <a onClick={e => setCurrent(2)} className="fw-bold">Sign Up</a></p>
    //     </div>
    //   </div>
    // </div>

    <div className="card">
      <div className="card-body p-5">
        <h2 className="text-uppercase text-center mb-5">Войти</h2>
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example3cg">Почта</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
          </div>
          <div className="form-check d-flex justify-content-center mb-5">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
            <label className="form-check-label d-flex align-items-center " htmlFor="form2Example3g">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary btn-block btn-lg text-light">Войти</button>
          </div>
          <p className="text-center text-muted mt-5 mb-0">Еще нет аккаунта<a onClick={e => setCurrent(2)} className="fw-bold text-body ms-2"><u>Создать</u></a></p>
        </form>
      </div>
    </div>

  );
}

export default Login