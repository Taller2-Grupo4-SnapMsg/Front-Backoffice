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
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        zIndex: 10000,
        height: '100dvh',
        borderColor: 'divider',
        background: 'transparent',
        //top: 'var(--Header-height)',
        //height: 'calc(100vh - var(--Header-height))',
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
        padding: '10%',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
          lg: 'translateX(-100%)',
        },
      }} />

      <Card style={{ borderRadius: '40px' }}>
        <CardHeader 
          title={
            <Box display="flex" alignItems="center" style={{ height: '400px'}}>
            </Box>
          }
        />
      </Card>

      <Card style={{ marginTop: '50px', borderRadius: '40px'  }}>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" style={{ height: '350px' }}>
            </Box>
          }
        />
      </Card>

    </Sheet>
  );
};

export default ProfileRight;
