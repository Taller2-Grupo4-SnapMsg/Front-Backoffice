import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/joy';
import CardHeader from '@mui/material/CardHeader';
import Sheet from '@mui/joy/Sheet';

import GlobalStyles from '@mui/joy/GlobalStyles';

const ProfileRight = () => {
  return (
<Sheet
      className="rightBar"
      sx={{
        position: 'sticky',
        top: 'var(--Header-height)',
        zIndex: 10000,
        height: 'calc(100vh - var(--Header-height))',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '224px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '256px',
            },
          },
        })}
      />
      <Box className="Sidebar-overlay" sx={{
        position: 'fixed',
        zIndex: 9998,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
        transition: 'opacity 0.4s',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
          lg: 'translateX(-100%)',
        },
      }} />

      {/* Primera Card (Más grande) */}
      <Card elevation={3}>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" style={{ backgroundColor: '#000', height: '250px' }}>
              <Box ml={4} mt={5} display="flex" flexDirection="column" style={{ width: '150px' }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="User avatar"
                  className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: '150px', zIndex: 1 }}
                />
                <Button variant="outlined" color="dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                  Edit profile
                </Button>
              </Box>
              <Box ml={3} style={{ marginTop: '130px' }}>
                <Typography variant="h5">Andy Horwitz</Typography>
                <Typography>New York</Typography>
              </Box>
            </Box>
          }
        />
        {/* Contenido de la primera Card */}
        {/* ... */}
      </Card>

      {/* Segunda Card */}
      <Card elevation={3} style={{ marginTop: '16px' }}>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" style={{ backgroundColor: '#000', height: '200px' }}>
              <Box ml={4} mt={5} display="flex" flexDirection="column" style={{ width: '150px' }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="User avatar"
                  className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: '150px', zIndex: 1 }}
                />
                <Button variant="outlined" color="dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                  Edit profile
                </Button>
              </Box>
              <Box ml={3} style={{ marginTop: '130px' }}>
                <Typography variant="h5">Andy Horwitz</Typography>
                <Typography>New York</Typography>
              </Box>
            </Box>
          }
        />
        {/* Contenido de la segunda Card */}
        {/* ... */}
      </Card>
    </Sheet>
  );
};

export default ProfileRight;
