import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchUser from '../../service/FetchUser';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideBar from '../backoffice/SideBar';
import TopBar from '../backoffice/TopBar';
import { defaultTheme } from '../../constants.js';
import ProfileInformation from './ProfileInformation';

function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const { email } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await FetchUser(email, setLoading, setUser);
    };

    fetchData();
  }, [email]); // Dependency array ensures this effect runs only when 'email' changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx = {{display: 'flex', flexDirection: 'row'}}>
        <SideBar />
        <Box component="main" className="MainContent" sx={{ display: 'flex', flexDirection: 'column' }}>
          <TopBar />
          <ProfileInformation userData={user} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserProfile;
