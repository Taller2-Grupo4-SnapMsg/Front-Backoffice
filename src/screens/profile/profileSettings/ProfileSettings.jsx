import React, { useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import useScript from '../../../service/loadScripts/useScript';
import Sidebar from '../../../components/sideBar/Sidebar';
import Header from '../../../components/header/Header';
import MyProfile from './components/MyProfile';


export default function ProfileSettings() {
  useEffect(() => {
    // Define feather here since it's used above
    // eslint-disable-next-line no-undef
    const feather = window.feather;
  }, []);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          '[data-feather], .feather': {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: 'var(--Icon-margin)',
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: '1em',
            height: '1em',
          },
        })}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={(theme) => ({
            '--main-paddingTop': {
              xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
              md: '32px',
            },
            px: {
              xs: 2,
              md: 3,
            },
            pt: 'var(--main-paddingTop)',
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          })}
        >
          <MyProfile />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

