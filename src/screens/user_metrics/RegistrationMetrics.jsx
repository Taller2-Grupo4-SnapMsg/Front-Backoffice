import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import TopBarCalendars from '../../components/TopBarCalendars';

import NumberBox from '../../components/NumberBox';
import { Typography, Container, Box } from '@mui/material';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchRegistrationData from '../../service/FetchRegistrationData';
import FetchRegistrationAvgTimeData from '../../service/FetchRegistrationAvgTimeData';

const RegistrationMetrics = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [registrationAvgTimeData, setRegistrationAvgTimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1st of November, month is 0 based
  // starting before any metrics where created, as to start counting from the beggining
  const novemberFirstDate = new Date(2023, 10, 1); 

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
      setRegistrationAvgTimeData(await FetchRegistrationAvgTimeData(timestampBegin, timestampEnd));
      setRegistrationData(await FetchRegistrationData(timestampBegin, timestampEnd));
    } catch (error) {
      console.error('Error fetching Registration data:', error);
      setRegistrationData([]);
      setRegistrationAvgTimeData([]);
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
      

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
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
      

        <Box display="flex" justifyContent="center" alignItems="center">
          <Box mx={4} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" sx={{ mb: 2 }}>
              Registration Email Amount
            </Typography>
            <NumberBox number={registrationData["amount_registrations"]} borderColor={'white'} unit={'s'}/>
          </Box>

          <Box mx={4} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" sx={{ mb: 2 }}>
              Registration Average Time
            </Typography>
            <NumberBox number={registrationAvgTimeData["average_time"]} borderColor={'white'} unit={'s'}/>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegistrationMetrics;
