import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import image from '../images/dev-community-icon.png';

const Navigation = () => {
  const isLoggedin = useSelector(state => state.auth.isLoggedin);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/"></Link>
      <img src={image} alt="" width="38" />
      <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link " to="/">
            Home <span className="sr-only"></span>
          </Link>
          {isLoggedin && (
            <Link className="nav-item nav-link" to="contacts">
              Contacts
            </Link>
          )}

          {isLoggedin ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
