import React, { useState, useEffect } from 'react';
import { Typography, Input, Button, Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';
import FetchGeoZoneData from '../../service/FetchGeoZoneData';
import { defaultTheme, GREY } from '../../constants';

const GeoZonesMetrics = () => {
  const [geoZonesData, setGeoZonesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topX, setTopX] = useState(3);
  const fillcolor = defaultTheme.palette.secondary.main;

  const novemberFirstDate = new Date(2023, 10, 1); // 1st of November, month is 0 based

  // Calculate tomorrow's date
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // // Set initial values using useState
  const [timestampBegin, setTimestampBegin] = useState(novemberFirstDate);
  const [timestampEnd, setTimestampEnd] = useState(tomorrowDate);


  const fetchData = async (amount)  => {
    try {
      setLoading(true);
      const data = await FetchGeoZoneData(amount, timestampBegin, timestampEnd);
      setGeoZonesData(data);
    } catch (error) {
      console.error('Error fetching GeoZone data:', error);
      setGeoZonesData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleTopXChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setTopX(value);
  };

  const handleApplyFilter = () => {
    fetchData(topX);
  };

  const handleGetAll = () => {
    fetchData();
  };


  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography color="lightgray" variant="h4" style={{ marginBottom: '40px', marginTop: '10px', marginRight: '20px' }}>
            Distribution of Users around the World
          </Typography>
          <Typography color="lightgray" variant="h6" style={{ marginRight: '10px', marginBottom: '30px' }}>
            Top X:{' '}
          </Typography>
          <Input
            type="number"
            value={topX}
            onChange={handleTopXChange}
            style={{ marginRight: '10px', marginBottom: '30px' }}
          />
          <Button variant="contained" onClick={handleApplyFilter} style={{ marginLeft: '10px', marginBottom: '30px' }}>
            Apply
          </Button>
          <Button variant="contained" onClick={handleGetAll} style={{ marginLeft: '20px', marginBottom: '30px' }}>
            Get All
          </Button>
        </Box>

        <TableContainer component={Paper} style={{ width: '800px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: '23px', textAlign: 'center', color: fillcolor  }}>Country</TableCell>
                <TableCell style={{ fontSize: '23px', textAlign: 'center', color: fillcolor  }}>Amount Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {geoZonesData.map((row) => (
                <TableRow key={row.country}>
                  <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.country}</TableCell>
                  <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.amount_users}</TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default GeoZonesMetrics;
