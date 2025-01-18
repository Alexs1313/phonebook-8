import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operationsThunk';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <span className="nav-item nav-link" style={{ paddingLeft: '950px' }}>
        Hello , {name} 🐷{' '}
        <button onClick={() => dispatch(logoutThunk())}>Log out</button>
      </span>
    </div>
  );
};

export default UserMenu;
