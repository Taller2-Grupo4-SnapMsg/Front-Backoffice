import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// Chattie:
// It's a logo that spins when you hover over the button, it's amazing!
const LogoListItem = ({navigate}) => {
  return (
    <ListItemButton
      onClick={() => navigate('/admin/dashboard')}
      sx={{
        '&:hover': {
          '& img': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <ListItemIcon>
        <Box
          component="img"
          src="/small_logo.png"
          sx={{
            width: 32,
            height: 32,
            margin: '1%',
            transition: 'transform 0.3s',
          }}
        />
      </ListItemIcon>
      <ListItemText primary="SnapMsg - Backoffice" />
    </ListItemButton>
  );
};


export const mainListItems = (navigate) => (
  <React.Fragment>
    
    <LogoListItem navigate={navigate}/>
    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={() => navigate('/admin/dashboard')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={() => navigate('/admin/signup')}>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Create new admin" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={() => navigate('/admin/snapmsg')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="SnapMsg's posts" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={() => navigate('/admin/service_status')}>
      <ListItemIcon>
        <EngineeringIcon />
      </ListItemIcon>
      <ListItemText primary="Service Status" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={() => navigate('/admin/user_metrics')}>
      <ListItemIcon>
        <EngineeringIcon />
      </ListItemIcon>
      <ListItemText primary="User metrics" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Content metrics" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />

  </React.Fragment>
);
