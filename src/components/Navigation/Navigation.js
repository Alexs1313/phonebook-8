import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const Navigation = () => {
  const isLoggedin = useSelector(state => state.auth.isLoggedin);
  return (
    <nav className="navbar-dark bg-primary ">
      <div>
        <div className="navbar-nav ">
          <div
            style={{
              gap: 50,
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 5,
            }}
          >
            <div style={{ display: 'flex', gap: 20 }}>
              <Link className="nav-item nav-link " to="/">
                Home
              </Link>
              {isLoggedin && (
                <Link className="nav-item nav-link" to="contacts">
                  Contacts
                </Link>
              )}
            </div>
            {isLoggedin ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </div>
    </nav>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography>
    //         <Link className="nav-item nav-link " to="/">
    //           Home <span className="sr-only"></span>
    //         </Link>
    //       </Typography>{' '}
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         {isLoggedin && (
    //           <Link className="nav-item nav-link" to="contacts">
    //             Contacts
    //           </Link>
    //         )}

    //         {isLoggedin ? <UserMenu /> : <AuthNav />}
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Navigation;
