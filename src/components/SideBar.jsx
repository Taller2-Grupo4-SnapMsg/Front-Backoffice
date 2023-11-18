import * as React from 'react';
import { mainListItems} from './ListItems';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';


export default function SideBar() {
    const navigate = useNavigate();

    return(
      <AppBar sx = {{width: '20%', position: 'relative'}}>
        <List component="nav">
            {mainListItems(navigate)}
        </List>
      </AppBar>
    );
}