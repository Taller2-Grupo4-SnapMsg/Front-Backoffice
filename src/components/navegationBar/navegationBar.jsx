
import Drawer from '@mui/material/Drawer';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

// Importa los iconos
import MessagesIcon from './messageIcon';
import NotificationsIcon from './notificationIcon';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
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
    marginTop: '50px',
    width: '100%',
    padding: '0px'
  };
  
const logoStyles = {
  textAlign: 'center',
  marginTop: '20%',
  marginLeft: '10%',
  marginRight: '10%',
  '& img': {
    maxWidth: '50px',
  },
};
  
const listItemButtonStyle = {
  borderRadius: '24px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
};
  
const navigationItems = [
  { text: 'Home', url: '/', icon: <HomeIcon />},
  { text: 'Explore', url: '/notifications', icon: <SearchIcon />},
  { text: 'Notifications', url: '/notifications', icon: <NotificationsIcon /> },
  { text: 'Messages', url: '/messages', icon:  <MessagesIcon />},
  { text: 'Profile', url: '/profile', icon: <PersonIcon /> },
  { text: 'Settings', url: '/notifications', icon: <SettingsIcon /> },
];

const NavegationBar = () => {
  return (
        <Drawer
          sx={{
            width: '100%',
            flexShrink: 0,
            bgcolor: '#000000',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '20%',
              marginLeft: "50px",
              //borderRight: '5px solid white'
              border: '5px solid green',
              backgroundColor: '#000000',
            },
          }}
          variant="permanent"
          anchor="left"
        >
        <Box sx={logoStyles}>
          <Logo />
        </Box>
        <Toolbar sx={{ width: '100%' }}>
        <List position="fixed" sx={{ marginLeft: '10px', marginRight: '10px', width: '100%' }}>
          {navigationItems.map((item) => (
            <ListItem key={item.text} sx={spacerStyles}>
              <ListItemButton sx={listItemButtonStyle} component={Link} to={item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Toolbar>
        </Drawer>
  );
};

export default NavegationBar;