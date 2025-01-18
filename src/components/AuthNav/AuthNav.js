import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link
        className="nav-item nav-link"
        to="register"
        style={{
          marginLeft: '450px',
          marginRight: '30px',
        }}
      >
        Registr
      </Link>
      <Link className="nav-item nav-link" to="login">
        Login
      </Link>
    </>
  );
};

export default AuthNav;
