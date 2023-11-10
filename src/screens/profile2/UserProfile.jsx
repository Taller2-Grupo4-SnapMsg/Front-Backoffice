import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchUser from '../../service/FetchUser';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from '../backoffice/SideBar';
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
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <ProfileInformation userData={user} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserProfile;
