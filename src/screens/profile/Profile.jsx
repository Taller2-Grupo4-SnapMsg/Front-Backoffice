import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Importa los iconos
import MessagesIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// Import your custom Logo component
import Logo from '../../components/logo/Logo';

const drawerWidth = 300;

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#353839',
      light: '#F5EBFF',
    },
    mode: 'dark',
  },
});

const spacerStyles = {
  marginTop: '50px', // Increase this value for more vertical space
};

const logoStyles = {
  display: 'flex',
};

const listItemButtonStyle = {
  borderRadius: '24px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex', // Added
  alignItems: 'center', // Vertically center content
  padding: '8px 16px', // Adjust padding as needed
};


export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', bgcolor: '#947EB0' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',

            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Box sx={logoStyles}>
            <Logo sx={{ width: '10px', height: 'auto' , marginLeft: '11.5%'}}/>
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
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: '#947EB0', p: 3 }}
        >
          {/* Add the AppBar with the custom Logo component */}
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                Your App Name
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Typography paragraph>
            {/* Your main content */}
            This is your main content. You can add your content here.
          </Typography>
          <Typography paragraph>
            {/* Additional content */}
            More content can be added here.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
