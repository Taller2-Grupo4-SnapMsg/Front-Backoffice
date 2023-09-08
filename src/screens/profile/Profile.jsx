import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import NavegationBar from '../../components/navegationBar/navegationBar';

//<CssBaseline />

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      navBar: '#000099',
      light: '#F5EBFF',
    },
    mode: 'dark',
  },
});

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', bgcolor: '#000000', height: "100%"}}>
        <NavegationBar/>

        
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'tranparent', p: 3 }}
        >   
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* Contenido de la primera columna */}
              <Divider sx={{ mr: 3 }} />
              <Toolbar />
              <Avatar
                sx={{ width: 100, height: 100, margin: '0 auto' }}
              >
                J
              </Avatar>
              <Typography variant="h4" sx={{ textAlign: 'center', mt: 2}}>
                Taylor Swift
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                @TaylorSwift
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                jsdjfsdjfslkfjslka
                ajsdnakjsdnalksndsa
                asjkdaksjdnaksjdnsa
              </Typography>
              <Divider sx={{ mt: 3, mb: 2 }} />
              <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                1 Followers
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* Contenido de la segunda columna */}
              {/* Agrega aquí el contenido de la segunda columna */}
            </Grid>

          </Grid>
        </Box>



      </Box>
    </ThemeProvider>
  );
  }
