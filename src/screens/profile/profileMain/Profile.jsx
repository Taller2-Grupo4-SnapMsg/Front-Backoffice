import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../../../components/sideBar/Sidebar';
import Header from '../../../components/header/Header';
import Grid from '@mui/material/Grid';
import ProfileInformation from './ProfileInformation';
import ChatsPane from '../../messages/components/ChatsPane';
import ProfileInformation2 from './ProfileInformation2';

import { chats } from '../../messages/data';

export default function Profile() {
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
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Header />
        <Sidebar />
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <ProfileInformation2 />
            </Grid>
            <Grid item xs={12} lg={4} sx={{ backgroundColor: 'red' }}>
              {/* Aquí puedes agregar contenido para la columna al lado */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}


