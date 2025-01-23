import { Box } from '@mui/material';
import AppBar from 'components/AppBar/AppBar';

import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Box component="section" sx={{ p: 2, flexGrow: 1 }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Layout;
