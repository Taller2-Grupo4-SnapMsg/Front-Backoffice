import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import BarChartIcon from '@mui/icons-material/BarChart';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (navigate) => (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>

    <ListItemButton onClick={() => navigate('/admin/signup')}>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Create new admin" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PersonAddDisabledIcon />
      </ListItemIcon>
      <ListItemText primary="Block user" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <EngineeringIcon />
      </ListItemIcon>
      <ListItemText primary="User metrics" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Content metrics" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);