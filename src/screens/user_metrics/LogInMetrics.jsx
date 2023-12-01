import React, { useState, useEffect } from 'react';
import NumberBox from '../../components/NumberBox';
import { Typography, Container, Grid, Box, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';

import TopBarCalendars from '../../components/TopBarCalendars';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchLogInData from '../../service/FetchLogInData';
import FetchLogInAvgTimeData from '../../service/FetchLogInAvgTimeData'

import { GREY, GREEN, RED } from '../../constants';
const DEFAULT_AMOUNT_GEOZONES = 15

const LoginMetrics = () => {
  const [loginData, setLoginData] = useState([]);
  const [loginAvgTimeData, setLoginAvgTimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});


  // 1st of November, month is 0 based
  // starting before any metrics where created, as to start counting from the beggining
  const novemberFirstDate = new Date(2023, 10, 1); 

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  const [timestampBegin, setTimestampBegin] = useState(novemberFirstDate);
  const [timestampEnd, setTimestampEnd] = useState(tomorrowDate);

  const fetchData = async () => {
    try {
      setLoading(true);
      const dataLogin = await FetchLogInData(timestampBegin, timestampEnd)
      setLoginData(dataLogin);
      setLoginAvgTimeData(await FetchLogInAvgTimeData(timestampBegin, timestampEnd));

      const emailChartData = [
        {
          label: 'Email',
          'Successful Logins': dataLogin.amount_email_succ || 0,
          'Failed Logins': dataLogin.amount_email_fail || 0,
        },
      ];
      const federatedChartData = Object.keys(dataLogin.amount_federated_succ?.amount_logins || {}).map(provider => ({
        label: provider,
        'Successful Logins': dataLogin.amount_federated_succ?.amount_logins[provider] || 0,
        'Failed Logins': dataLogin.amount_federated_fail?.amount_logins[provider] || 0,
      }));
      
      const stackedChartData = emailChartData.concat(federatedChartData);

      setChartData(stackedChartData);

    } catch (error) {
      console.error('Error fetching Login data:', error);
      setLoginData([]);
      setLoginAvgTimeData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(DEFAULT_AMOUNT_GEOZONES);
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
      <Container sx={{ mt: 8, mb: 8, width: '80%' }}>
        {/* Apply Button */}
        <Grid item xs={12}>
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
            >
              Apply
            </Button>
          </Box>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Bar Chart */}
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Login Metrics
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" label={{ value: 'Login Entity', position: 'insideBottom', offset: 0, dy: 10 }} />
                  <YAxis label={{ value: 'Distribution', angle: -90, position: 'insideLeft', dy: -20 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ marginBottom: '-3rem' }} />
                  <Bar dataKey="Successful Logins" stackId="a" fill={GREEN} />
                  <Bar dataKey="Failed Logins" stackId="a" fill={RED} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          {/* Number Boxes for "Login All" and Average time */}
          <Grid item xs={12} md={4} container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} textAlign="center">
              <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" sx={{ mb: 2 }}>
                Login All Success
              </Typography>
              <NumberBox number={loginData.amount_all_succ} borderColor={GREEN} unit={''} />
              </Box>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" sx={{ mb: 2 }}>
                Login All Fails
              </Typography>
              <NumberBox number={loginData.amount_all_fail} borderColor={RED} unit={''} />
              </Box>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Login Average Time
              </Typography>
              <NumberBox number={loginAvgTimeData["average_time"]} borderColor={GREY} unit={'s'}/>
            </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoginMetrics;