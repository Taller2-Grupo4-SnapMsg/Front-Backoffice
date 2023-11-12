import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function TopBar() {

    return(
        <AppBar sx = {{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            "position": "relative",
        }}>
            <Toolbar>
              <Box component = "img" src = '/small_logo.png' sx = {{ width: 32, height: 32, margin: '1%' }}/>
              <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
              >
                  SnapMsg - Backoffice
              </Typography>
            </Toolbar>
        </AppBar>
    );

}