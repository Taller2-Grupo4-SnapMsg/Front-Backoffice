import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { mainListItems} from '../screens/backoffice/ListItems.jsx';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

export default function SideBar() {
    const navigate = useNavigate();

    return(
      <Drawer variant="permanent" open={open}>
          <Toolbar
              sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              }}
          >
          </Toolbar>
          <Divider />
          <List component="nav">
              {mainListItems(navigate)}
              <Divider sx={{ my: 1 }} />
              {}
          </List>
      </Drawer>
    );
}