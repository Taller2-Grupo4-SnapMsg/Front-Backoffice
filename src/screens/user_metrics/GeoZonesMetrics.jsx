import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Typography, Input, Button, Box } from '@mui/material';
import { defaultTheme } from '../../constants';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen';
import FetchGeoZoneData from '../../service/FetchGeoZoneData';

const GREY = '#DFE0DC';

const GeoZonesMetrics = () => {
  const [geoZonesData, setGeoZonesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topX, setTopX] = useState(3);
  const fillcolor = defaultTheme.palette.secondary.main;

  const fetchData = async (amount)  => {
    try {
      console.log("amount es ", amount);
      setLoading(true);
      const data = await FetchGeoZoneData(amount);
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
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
      <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography color={GREY} variant="h4" style={{ marginBottom: '40px', marginTop: '10px', marginRight: '20px' }}>
          Distribution of Users around the World
        </Typography>
        <Typography color={GREY}  variant="h6" style={{ marginRight: '10px', marginBottom: '30px'}}>Top X: </Typography>
        <Input
          type="number"
          value={topX}
          onChange={handleTopXChange}
          style={{ marginRight: '10px', marginBottom: '30px'}}
        />
        <Button variant="contained" onClick={handleApplyFilter} style={{ marginLeft:'10px', marginBottom: '30px'}} >
          Apply
        </Button>
        <Button variant="contained" onClick={handleGetAll} style={{ marginLeft:'20px', marginBottom: '30px'}}>
          Get All
        </Button>
      </Box>
      <BarChart
        width={800}
        height={400}
        data={geoZonesData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Bar type="monotone" dataKey="amount_users" fill={fillcolor} />
        <XAxis
          dataKey="country"
          tick={{ fill: GREY }}
          axisLine={{ stroke: GREY }}
        />
        <YAxis
          tick={{ fill: GREY }}
          axisLine={{ stroke: GREY }}
        />
        {/* <Tooltip /> */}
      </BarChart>
    </Box>
  );
};

export default GeoZonesMetrics;
