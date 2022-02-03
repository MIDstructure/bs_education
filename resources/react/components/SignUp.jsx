import React from 'react';


function SignUp({setCurrent}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="card">
      <div className="card-body p-5">
        <h2 className="text-uppercase text-center mb-5">Создайте аккаунт</h2>
        <form>
          <div className="form-outline mb-4">
            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example1cg">Имя</label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example3cg">Почта</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="form3Example4cdg">Подтверждение пароль</label>
          </div>
          <div className="form-check d-flex justify-content-center mb-5">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
            <label className="form-check-label d-flex align-items-center" htmlFor="form2Example3g">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary btn-block btn-lg text-light">Создать аккаунт</button>
          </div>
          <p className="text-center text-muted mt-5 mb-0">Уже есть аккаунт?<a onClick={e => setCurrent(1)} className="fw-bold text-body ms-2"><u>Войти</u></a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp