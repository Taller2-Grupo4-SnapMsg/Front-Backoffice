import React, { useState, useEffect } from 'react';
import NumberBox from '../../components/NumberBox';
import { Typography, Container, Grid, Box, Button } from '@mui/material';

import TopBarCalendars from '../../components/TopBarCalendars';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchLogInData from '../../service/FetchLogInData';
import FetchLogInAvgTimeData from '../../service/FetchLogInAvgTimeData'

const RED = '#AD3435';
const GREEN = '#6DA34D';
const GREY = '#DFE0DC';

const LoginMetrics = () => {
  const [loginData, setLoginData] = useState([]);
  const [loginAvgTimeData, setLoginAvgTimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const novemberFirstDate = new Date(2023, 10, 1); // 1st of November, month is 0 based

  // Calculate tomorrow's date
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // // Set initial values using useState
  const [timestampBegin, setTimestampBegin] = useState(novemberFirstDate);
  const [timestampEnd, setTimestampEnd] = useState(tomorrowDate);

  const fetchData = async () => {
    try {
      setLoading(true);
      setLoginData(await FetchLogInData(timestampBegin, timestampEnd));
      setLoginAvgTimeData(await FetchLogInAvgTimeData(timestampBegin, timestampEnd));
    } catch (error) {
      console.error('Error fetching Login data:', error);
      setLoginData([]);
      setLoginAvgTimeData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
    <TopBarCalendars
        timestampBegin={timestampBegin}
        timestampEnd={timestampEnd}
        setTimestampBegin={setTimestampBegin}
        setTimestampEnd={setTimestampEnd}
      />
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#947EB0",
              '&:hover': {
                backgroundColor: "#6B5A8E",
              },
              width: '17vw',
              fontSize: 16,
              marginLeft: '0.8vw',
            }}
            onClick={fetchData}
          >Apply</Button>
          </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* First Row */}
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6} md={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  Login Email Success
                </Typography>
                <NumberBox number={loginData["amount_email_succ"]} borderColor={GREEN} unit={''}/>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  Login Email Fails
                </Typography>
                <NumberBox number={loginData["amount_email_fail"]} borderColor={RED} unit={''}/>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  Login All Success
                </Typography>
                <NumberBox number={loginData["amount_all_succ"]} borderColor={GREEN} unit={''}/>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  Login All Fails
                </Typography>
                <NumberBox number={loginData["amount_all_fail"]} borderColor={RED} unit={''} />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {Object.entries(loginData.amount_federated_succ?.amount_logins || {}).map(([provider, count]) => (
              <Grid key={provider} item xs={6} md={3}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                    {`Login ${provider}`}
                  </Typography>
                  <NumberBox number={count} borderColor={GREEN} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Third Row */}
        <Grid item xs={12} textAlign="center">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
              Login Average Time
            </Typography>
            <NumberBox number={loginAvgTimeData["average_time"]} borderColor={GREY} unit={'s'}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default LoginMetrics;
