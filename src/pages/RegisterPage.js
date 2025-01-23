import { registerThunk } from '../redux/auth/operationsThunk';

import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registerThunk(newUser));

    e.target.reset();
  };

  return (
    <div
      className=" card position-absolute top-50 start-50 translate-middle p-2"
      style={{ minWidth: '350px' }}
    >
      <h1 style={{ margin: '0 auto' }}>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            name="name"
            className="form-control form-control-sm"
            id="exampleInputName1"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            className="form-control form-control-sm"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control form-control-sm"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
