import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Link className="nav-item nav-link" to="register">
        Registr
      </Link>
      <Link className="nav-item nav-link" to="login">
        Login
      </Link>
    </div>
  );
};

export default AuthNav;
