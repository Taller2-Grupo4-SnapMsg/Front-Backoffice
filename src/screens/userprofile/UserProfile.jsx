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
import SnapMsgTable from './SnapMsgTable.jsx';
import FetchUserSnapMsg from '../../service/FetchUserSnapMsg.jsx';
import Typography from '@mui/material/Typography';

function createData(body, likes, shares) {
  return { body, likes, shares};
}

function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = React.useState([]);
  const [user, setUser] = useState({});
  const { email } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await FetchUser(email, setUser);
    };
  
    const fetchSnapMsg = async () => {
      try {
        const response = await FetchUserSnapMsg(email);
        const formattedRows = response.map((snapmsg) => {
          return createData(
            snapmsg.text,
            snapmsg.number_likes,
            snapmsg.number_reposts,
            snapmsg.image
          );
        });
        setRows(formattedRows);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    const loadData = async () => {
      try {
        await Promise.all([fetchSnapMsg(), fetchData()]);
      } finally {
        setLoading(false);
      }
    };
  
    loadData();
  }, [email]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box component="main" className="MainContent" sx={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Box sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <TopBar />
          <Box sx = {{margin: '1%'}}>
            <ProfileInformation userData={user} />
          </Box>
          <Box sx = {{margin: '1%'}}>
            <SnapMsgTable rows={rows} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserProfile;
