
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
import { API_URL } from '../../constants';

const defaultServices = [{ 
        name: 'Admins',
        creationDate: '---- -- --',
        description: '-',
        isUp: false,
    }, { 
        name: 'Users',
        creationDate: '---- -- --',
        description: '-',
        isUp: false,
    },{ 
        name: 'SnapMsg',
        creationDate: '---- -- --',
        description: '-',
        isUp: false,
    },{ 
        name: 'Metrics',
        creationDate: '---- -- --',
        description: '-',
        isUp: false,
    },
];

const ServiceList = () => {
    const [query, setQuery] = React.useState('');
    const [services, setServices] = React.useState(defaultServices);

    React.useEffect(() => {
        const checkServiceStatus = async () => {
            const updatedServices = [...services]; // Clone the services array
            for (let i = 0; i < updatedServices.length; i++) {
                try {
                    const lower_name = updatedServices[i].name.toLowerCase();
                    const response = await fetch(API_URL + '/service_status?service=' + lower_name);
                    if (response.status === 200) {
                        const data = await response.json();
                        updatedServices[i].creationDate = data.creation_date;
                        updatedServices[i].description = data.description;
                        updatedServices[i].isUp = true;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            setServices(updatedServices);
        };

        checkServiceStatus();
    }, []);

    React.useEffect(() => {
        const filteredServices = defaultServices.filter((service) => {
            return service.name.toLowerCase().includes(query.toLowerCase());
        });
        setServices(filteredServices);
        if (query === '') {
            setServices(defaultServices);
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
