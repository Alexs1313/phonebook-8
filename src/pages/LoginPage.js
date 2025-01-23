import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/operationsThunk';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };

  return (
    <div
      className=" card position-absolute top-50 start-50 translate-middle p-2"
      style={{ minWidth: '350px' }}
    >
      <h1 style={{ margin: '0 auto', marginBottom: 15 }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control form-control-sm "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating ">
          <input
            type="password"
            name="password"
            className="form-control form-control-sm "
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{ marginTop: '10px' }}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
