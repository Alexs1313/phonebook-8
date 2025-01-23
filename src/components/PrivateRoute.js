import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedin = useSelector(state => state.auth.isLoggedin);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const shouldRedirect = !isLoggedin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
