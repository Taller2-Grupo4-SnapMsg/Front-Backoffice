import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import TopBarCalendars from '../../components/TopBarCalendars';

import NumberBox from '../../components/NumberBox';
import { Typography, Container, Box } from '@mui/material';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';

import FetchBlockedNow from '../../service/FetchBlockedNow';
import FetchBlocks from '../../service/FetchBlocks';

const BlockMetrics = () => {
  const [blocksInTimeframe, setBlocksInTimeframe] = useState([]);
  const [blocksNow, setBlocksNow] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  const [timestampEnd, setTimestampEnd] = useState(tomorrowDate);

  const fetchData = async () => {
    try {
      setLoading(true);
      setBlocksInTimeframe(await FetchBlocks(timestampEnd));
      setBlocksNow(await FetchBlockedNow());
    } catch (error) {
      console.error('Error fetching Blocking data:', error);
      setBlocksInTimeframe([]);
      setBlocksNow([]);
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
        timestampEnd={timestampEnd}
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
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center'  }}>
              Blocked users at the time
            </Typography>
            <NumberBox number={blocksInTimeframe["blocks_amount"]} borderColor={'white'} unit={''}/>
          </Box>
          <Box mx={4} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center'  }}>
              Blocked users right now
            </Typography>
            <NumberBox number={blocksNow["blocked_now_amount"]} borderColor={'white'} unit={''}/>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlockMetrics;
