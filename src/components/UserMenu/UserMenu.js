import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operationsThunk';
import { Button } from '@mui/material';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="nav-item nav-link">
        Welcome ,{name} 🐷{' '}
        <Button
          size="small"
          color="black"
          variant="contained"
          onClick={() => dispatch(logoutThunk())}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserMenu;
