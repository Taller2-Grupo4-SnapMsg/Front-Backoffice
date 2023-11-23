import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { defaultTheme } from '../../constants';
import { ThemeProvider } from '@mui/material/styles';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';
import FetchGeoZoneData from '../../service/FetchGeoZoneData';

function UserMetrics() {
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(true);
    const [geoZonesData, setGeoZonesData] = useState([]);

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    { name: 'Page B', uv: 350, pv: 2000, amt: 2200 },
    { name: 'Page C', uv: 200, pv: 1200, amt: 2000 }];


    useEffect(() => {
        setLoadingPage(true);
        const fetchData = async () => {
            setGeoZonesData(await FetchGeoZoneData());
            // Y los demás awaits
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
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {/* Geozones distribution */}
                    <BarChart 
                        width={600} 
                        height={300} 
                        data={geoZonesData}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}    
                    >
                        <Bar type="monotone" dataKey="amount_users" fill="#A995C9" />
                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                        <XAxis 
                            dataKey="country"
                            tick={{ fill: "#A995C9" }} 
                            axisLine={{ stroke: "#A995C9" }} />
                        <YAxis 
                            tick={{ fill: "#A995C9" }} 
                            axisLine={{ stroke: "#A995C9" }} />
                        <Tooltip />
                    </BarChart>
            </Container>
            </Box>
        </Box>
        </ThemeProvider>
    );
}

export default UserMetrics;