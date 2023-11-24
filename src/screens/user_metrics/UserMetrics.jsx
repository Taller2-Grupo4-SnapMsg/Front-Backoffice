import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { defaultTheme } from '../../constants';
import { ThemeProvider } from '@mui/material/styles';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Grid from '@mui/material/Grid';

import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import NumberBox from '../../components/NumberBox';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchGeoZoneData from '../../service/FetchGeoZoneData';
import FetchRegistrationData from '../../service/FetchRegistrationData';
import FetchRegistrationAvgTimeData from '../../service/FetchRegistrationAvgTimeData';
import FetchLogInData from '../../service/FetchLogInData';
import FetchLogInAvgTimeData from '../../service/FetchLogInAvgTimeData';

function UserMetrics() {
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(true);
    const [geoZonesData, setGeoZonesData] = useState([]);
    const [regData, setRegData] = useState([]);
    const [regAvgTimeData, setRegAvgTimeData] = useState([]);
    const [loginData, setLogInData] = useState([]);
    const [loginAvgTimeData, setLogInAvgTimeData] = useState([]);
    


    useEffect(() => {
        setLoadingPage(true);
        const fetchData = async () => {
            setGeoZonesData(await FetchGeoZoneData());
            setRegData(await FetchRegistrationData());
            setRegAvgTimeData(await FetchRegistrationAvgTimeData());
            setLogInData(await FetchLogInData());
            setLogInAvgTimeData(await FetchLogInAvgTimeData());
        };
    
        const loadData = async () => {
        try {
            await Promise.all([fetchData()]);
        } catch {
            setGeoZonesData([]);
        } finally {
            setLoading(false);
        }
    };
    
    loadData();
    setLoadingPage(false);
    }, []);

    if (loading) {
        return <LoadingAnimation />;
    }



    return (
    <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
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
                {/* All data */}
                <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                    <Grid container spacing={4}>
                       <Typography variant="h4" sx={{ mb: 2 }}>
                            Registration Email Amount
                        </Typography>
                        <NumberBox number={regData["amount_registrations"]} borderColor={'white'} />

                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Registration Average Time
                        </Typography>
                        <NumberBox number={regAvgTimeData["average_time"]} borderColor={'white'} />

                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login Email Average Time
                        </Typography>
                        <NumberBox number={loginAvgTimeData["average_time"]} borderColor={'white'} />

                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login Email Success
                        </Typography>
                        <NumberBox number={loginData["amount_email_succ"]} borderColor={'white'} />

                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login Email Fails
                        </Typography>
                        <NumberBox number={loginData["amount_email_fail"]} borderColor={'white'} />

                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login Email Average Time
                        </Typography>
                        <NumberBox number={loginAvgTimeData["average_time"]} borderColor={'white'} />
                        
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login All Success
                        </Typography>
                        <NumberBox number={loginData["amount_all_succ"]} borderColor={'white'} />
                        
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Login All Fails
                        </Typography>
                        <NumberBox number={loginData["amount_all_fail"]} borderColor={'white'} />
                        

                        {Object.entries(loginData.amount_federated_succ?.amount_logins || {}).map(([provider, count]) => (
                            <div key={provider}>
                                <Typography variant="h4" sx={{ mb: 2 }}>
                                {`Login ${provider} Success`}
                                </Typography>
                                <NumberBox number={count} borderColor={'white'} />
                            </div>
                        ))}

                        {/* Geozones distribution */}
                        <Grid item xs={12} md={5}>
                            <BarChart 
                                width={600} 
                                height={300} 
                                data={geoZonesData}
                                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                            >
                                <Bar type="monotone" dataKey="amount_users" fill="#A995C9"/>
                                <XAxis 
                                    dataKey="country"
                                    tick={{ fill: "#A995C9" }} 
                                    axisLine={{ stroke: "#A995C9" }} />
                                <YAxis 
                                    tick={{ fill: "#A995C9" }} 
                                    axisLine={{ stroke: "#A995C9" }} />
                                <Tooltip />
                            </BarChart>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    </ThemeProvider>
    );
}

export default UserMetrics;