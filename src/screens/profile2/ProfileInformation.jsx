import * as React from "react";
import {
    Box,
    Divider,
    Typography
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../constants.js';

export default function ProfileInformation({userData}) {
    const image_src = userData?.avatar;
    if (image_src === undefined) {
        return <div>Loading...</div>;
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box component = "img" src={image_src} style = {{
                    width: 128,
                    height: 128,
                    borderRadius: 64,
                    border: '2px solid #fff',
                    boxShadow: '0 0 0 2px #fff',
                    marginBottom: 8,
                    marginTop: 8
                }}/>
                <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>
                    {userData.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                    {userData.email}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                    {userData.bio}
                </Typography>
                <Divider sx={{ mt: 3, mb: 2 }} />
            </Box>
        </ThemeProvider>
    );
}