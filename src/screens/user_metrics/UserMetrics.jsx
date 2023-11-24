import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { defaultTheme } from '../../constants';
import { ThemeProvider } from '@mui/material/styles';
import Public from '@mui/icons-material/Public';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Person from '@mui/icons-material/Person';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

import GeoZonesMetrics from './GeoZonesMetrics';
import LoginMetrics from './LogInMetrics';
import RegistrationMetrics from './RegistrationMetrics';

function UserMetrics() {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <SideBar />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <TopBar />
                <Container maxWidth="lg" sx={{ mt: 0, mb: 8}}>
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                  width: '100%',
                                  justifyContent: 'space-around',
                                },
                                '& .MuiTab-root': {
                                  width: '100%',
                                },
                              }}
                            >
                            <Tab value="one" icon={<PersonAdd />} label="Registration Metrics" />
                            <Tab value="two" icon={<Person />} label="Login Metrics" />
                            <Tab value="three" icon={<Public />} label="GeoZones Metrics" />
                        </Tabs>


                        {value === 'one' && <RegistrationMetrics />}
                        {value === 'two' && <LoginMetrics />}
                        {value === 'three' && <GeoZonesMetrics />}
                    </Box>
                </Container>
            </Box>
        </Box>
    </ThemeProvider>
    );
}

export default UserMetrics;