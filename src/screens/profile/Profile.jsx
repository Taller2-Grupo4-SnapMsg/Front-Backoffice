import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import NavegationBar from '../../components/navegationBar/navegationBar';
import Feed from '../../components/feed/Feed';
import ProfileInformation from './ProfileInformation';

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#F5EBFF',
      navBar: '#000000' 
    },
    mode: 'dark',
  },
});

export default function Profile() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: "100%", 
              marginInlineEnd: "2%"}}>

        <Box sx={{paddingTop: '10%', flex: 1, width: '100%'}}>
          <NavegationBar/>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#000000', p: 3, padding: '0px', flex:3 }}>       
          <Grid container spacing={3} sx={{border: '5px solid white'}}>
            <Grid item xs={12} sm={8} sx={{border: '5px solid blue'}} style= {{padding: '0px'}}>
                  <ProfileInformation/>
                <Grid item xs={12} sx={{border: '5px solid red'}}>
                  <Feed/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4} sx={{border: '5px solid orange'}}>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </ThemeProvider>
  );
  }

