import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchUser from '../../service/FetchUser.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideBar from '../../components/SideBar.jsx';
import TopBar from '../../components/TopBar.jsx';
import { defaultTheme } from '../../constants.js';
import ProfileInformation from './ProfileInformation.jsx';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen.jsx';

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
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Box component="main" className="MainContent" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx = {{display: 'flex', flexDirection: 'row'}}>
          <ProfileInformation userData={user} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserProfile;
