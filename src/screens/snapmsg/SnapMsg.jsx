import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';

import FetchSnapMsgAll from '../../service/FetchSnapMsgAll.jsx';
import SideBar from '../../components/SideBar.jsx';
import TopBar from '../../components/TopBar.jsx';
import { defaultTheme } from '../../constants.js';
import LoadingAnimation from '../../components/loadinglogo/LoadingScreen.jsx';
import SnapMsgTableWithUsers from './SnapMsgTableWithUsers.jsx';
import { translateImage } from '../../service/TranslateImagePath.jsx';


function createData(poster, image, body, likes, shares, created_at) {
  return {poster, image, body, likes, shares, created_at};
}

function SnapMsg() {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [query, setQuery] = React.useState('');
    const [loadingPage, setLoadingPage] = React.useState(true);

    useEffect(() => {
        setLoadingPage(true);
        const fetchSnapMsg = async () => {
        const response = await FetchSnapMsgAll(page, query);

        const promises = response.map(async (snapmsg) => {
            const responseImage = await translateImage(snapmsg.image);
            snapmsg.image = responseImage;
            return snapmsg;
        });

        const resolvedResponse = await Promise.all(promises);

        const formattedRows = resolvedResponse.map((snapmsg) => {
            return createData(
                snapmsg.user_creator.email,
                snapmsg.image,
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
            await Promise.all([fetchSnapMsg()]);
        } finally {
            setLoading(false);
        }
    };
    
    loadData();
    setLoadingPage(false);
    }, [page, query]);

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
                <TextField                   
                        id="Search text"
                        label="Search text"
                        name="Search text"
                        autoComplete="query"
                        color = "primary"
                        fullWidth
                        sx = {{ 
                        "& label.Mui-focused": {
                            color: "#A995C9"
                        }
                        }}
                        value = {query}
                        onChange={(e) => {setQuery(e.target.value), setPage(1)}}
                        autoFocus />
                    {/* Posts */}
                    <Box sx = {{margin: '1%'}}>
                        <SnapMsgTableWithUsers rows = {rows}/>
                    </Box>
                    {/* Pagination */}
                    {loadingPage ? (
                        <Pagination
                            count={10000}
                            siblingCount={5}
                            page={page}
                            boundaryCount={0}
                            color="primary"
                            disabled
                            sx={{ '.MuiPagination-ul': { justifyContent: 'space-around' } }}
                        />
                        ) : (
                        <Pagination
                            count={10000}
                            siblingCount={5}
                            page={page}
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

export default SnapMsg;