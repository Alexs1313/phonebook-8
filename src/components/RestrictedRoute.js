import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(state => state.auth.isLoggedin);

  return isLoggedin ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
