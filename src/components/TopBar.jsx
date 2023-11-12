import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';


export default function TopBar() {

    return(
        <AppBar sx = {{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            "position": "relative",
        }}>
            <Toolbar>
            </Toolbar>
        </AppBar>
    );
}