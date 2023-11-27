import React, { useState, useEffect } from 'react';
import NumberBox from '../../components/NumberBox';
import { Typography, Container, Box } from '@mui/material';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchRegistrationData from '../../service/FetchRegistrationData';
import FetchRegistrationAvgTimeData from '../../service/FetchRegistrationAvgTimeData';

const RegistrationMetrics = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [registrationAvgTimeData, setRegistrationAvgTimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const novemberFirstDate = new Date(2023, 10, 1); // 1st of November, month is 0 based

  // Calculate tomorrow's date
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // Set initial values using useState
  const [timestampBegin, setTimestampBegin] = useState(novemberFirstDate.toISOString());
  const [timestampEnd, setTimestampEnd] = useState(tomorrowDate.toISOString());



  useEffect(() => {
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

    fetchData();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box mx={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Registration Email Amount
          </Typography>
          <NumberBox number={registrationData["amount_registrations"]} borderColor={'white'} />
        </Box>

        <Box mx={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Registration Average Time
          </Typography>
          <NumberBox number={registrationAvgTimeData["average_time"]} borderColor={'white'} />
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationMetrics;
