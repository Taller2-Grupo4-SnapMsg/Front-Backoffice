
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Topbar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import { defaultTheme } from '../../constants';
import ServiceStatus from './ServiceStatus';


const ServiceList = () => {
  const services = [
    { name: 'Admins', status: 'up' },
    { name: 'Users', status: 'down' },
    { name: 'Posts', status: 'up' },
    { name: 'Metrics', status: 'down' },
  ];

  return (
    <ThemeProvider theme = {defaultTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
                <Topbar />
                {/** Service status */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10%',
                    marginTop: '5%'}}>
                    {/** Title */}
                    <Typography variant="h4" component="h1" gutterBottom>
                        Service Status
                    </Typography>
                    {/** List of services */}
                    <List fullwidth='true' sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {services.map((service) => (
                            <Box key={service.name}>
                                <ListItem 
                                    key={service.name} 
                                    secondaryAction={<ServiceStatus service = {service}/>} 
                                    disablePadding>
                                    <ListItemText id={service.name} primary={service.name} />
                                </ListItem>
                                <Divider sx={{ my: 1 }} />
                            </Box>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  );
};

export default ServiceList;
