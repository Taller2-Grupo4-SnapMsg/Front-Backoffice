import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import FetchUser from '../../service/FetchUser.jsx';
import SideBar from '../../components/SideBar.jsx';
import TopBar from '../../components/TopBar.jsx';
import { defaultTheme } from '../../constants.js';
import ProfileInformation from './ProfileInformation.jsx';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen.jsx';
import SnapMsgTable from './SnapMsgTable.jsx';
import FetchUserSnapMsg from '../../service/FetchUserSnapMsg.jsx';


function createData(body, likes, shares, created_at) {
  return { body, likes, shares, created_at};
}

function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = React.useState([]);
  const [user, setUser] = useState({});
  const [page, setPage] = React.useState(1);
  const [loadingPage, setLoadingPage] = React.useState(true);
  const { email } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await FetchUser(email, setUser);
    };
  
    const fetchSnapMsg = async () => {
      setLoadingPage(true);
      const response = await FetchUserSnapMsg(email, page);
      const formattedRows = response.map((snapmsg) => {
        return createData(
          snapmsg.text,
          snapmsg.number_likes,
          snapmsg.number_reposts,
          snapmsg.created_at,
        );
      });
      setRows(formattedRows);
    };
  
    const loadData = async () => {
      try {
        await Promise.all([fetchSnapMsg(), fetchData()]);
      } finally {
        setLoading(false);
      }
      setLoadingPage(false);
    };
  
    loadData();
  }, [email, page]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
              theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
            >
            <TopBar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* User information + posts*/}
                <Box sx = {{margin: '1%'}}>
                  <ProfileInformation userData={user} />
                </Box>
                <Box sx = {{margin: '1%'}}>
                  <SnapMsgTable rows={rows} />
                </Box>
                {/* Pagination */}
                {loadingPage ? (
                  <Pagination
                      count={10000}
                      siblingCount={5}
                      boundaryCount={0}
                      color="primary"
                      disabled
                      sx={{ '.MuiPagination-ul': { justifyContent: 'space-around' } }}
                  />
                  ) : (
                  <Pagination
                      count={10000}
                      siblingCount={5}
                      boundaryCount={0}
                      color="primary"
                      onChange={(_, value) => setPage(value)}
                      sx={{ '.MuiPagination-ul': { justifyContent: 'space-around' } }}
                  />
                  )}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
  );
}

export default UserProfile;
