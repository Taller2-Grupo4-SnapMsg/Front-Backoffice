
import Drawer from '@mui/material/Drawer';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Importa los iconos
import MessagesIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

// Import your custom Logo component
import Logo from '../../components/logo/Logo';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const DefaultTheme = createTheme({
    palette: {
      primary: {
        main: '#353839',
        navBar: '#353839',
        light: '#F5EBFF',
      },
      mode: 'dark',
    },
  });

const spacerStyles = {
    marginTop: '50px', // Increase this value for more vertical space
  };
  
  const logoStyles = {
    textAlign: 'center',
    margin: '20px 0', // Adjust the margin as needed
    '& img': {
      maxWidth: '50px', // Adjust the maximum width as needed
    },
  };
  
  const listItemButtonStyle = {
    borderRadius: '24px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex', // Added
    alignItems: 'center', // Vertically center content
    padding: '8px 16px', // Adjust padding as needed
  };

  /*    <Drawer
          sx={{
            width: '300px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '300px',
              boxSizing: 'border-box',

            },
          }}
          variant="permanent"
          anchor="left"
        >*/
//</Drawer>
//      <Toolbar>

const NavegationBar = () => {
  return (
      <Box component="navBar"
        sx={{bgcolor: '#000000'}}>
        <Box sx={logoStyles}>
          <Logo />
        </Box>
        <List position="fixed" sx={{ marginLeft: '20px', marginRight: '20px' }}>
          {['Home', 'Explore', 'Notifications', 'Messages', 'Profile', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={spacerStyles}>
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <SearchIcon />}
                  {index === 2 && <NotificationsActiveIcon />}
                  {index === 3 && <MessagesIcon />}
                  {index === 4 && <PersonIcon />}
                  {index === 5 && <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  );
};

export default NavegationBar;