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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setRegistrationAvgTimeData(await FetchRegistrationAvgTimeData());
        setRegistrationData(await FetchRegistrationData());
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
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
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
