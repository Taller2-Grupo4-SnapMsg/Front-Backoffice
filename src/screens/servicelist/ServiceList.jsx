
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Title from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import Topbar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import { defaultTheme } from '../../constants';
import { titleStyle } from '../../constants';
import ServiceTable from './ServiceTable';

const defaultServices = [
    { name: 'Admins'},
    { name: 'Users'},
    { name: 'Posts'},
    { name: 'Metrics'},
];

const ServiceList = () => {
    const [query, setQuery] = React.useState('');
    const [services, setFilteredServices] = React.useState(defaultServices);

    React.useEffect(() => {
        const filteredServices = defaultServices.filter((service) => {
            return service.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredServices(filteredServices);
        if (query === '') {
            setFilteredServices(defaultServices);
        }
    }, [query]);

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
                    marginTop: '1%'}}>
                    {/** Search bar + title */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Title style={titleStyle}>Services</Title>
                        <Divider orientation="vertical" flexItem sx = {{margin: '5%'}} />
                        <TextField                   
                            id="Search text"
                            label="Search services"
                            name="Search text"
                            autoComplete="services"
                            color = "primary"
                            sx = {{ 
                            "& label.Mui-focused": {
                                color: "#A995C9"
                            },
                            }}
                            fullwidth = 'true'
                            value = {query}
                            onChange={(e) => {setQuery(e.target.value)}}
                            autoFocus />
                    </Box>
                    {/** List of services */}
                    <ServiceTable services = {services} />
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
    );
};

export default ServiceList;
