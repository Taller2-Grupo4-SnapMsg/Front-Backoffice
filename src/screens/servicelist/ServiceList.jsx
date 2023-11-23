
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Topbar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import { defaultTheme } from '../../constants';
import ServiceTable from './ServiceTable';

const ServiceList = () => {
  const services = [
    { name: 'Admins'},
    { name: 'Users'},
    { name: 'Posts'},
    { name: 'Metrics'},
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
                    <ServiceTable services = {services} />
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  );
};

export default ServiceList;
