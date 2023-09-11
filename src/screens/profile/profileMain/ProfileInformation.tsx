import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ProfileInformation = () => {
  return (
    <Grid item xs={12} sx={{border: '5px solid white'}}>
        <Divider sx={{ mr: 3 }} />
        <Avatar
        sx={{ width: 100, height: 100, margin: '0 auto' }}
        >
        J
        </Avatar>
        <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>
        Taylor Swift
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
        @TaylorSwift
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
        jsdjfsdjfslkfjslka
        ajsdnakjsdnalksndsa
        asjkdaksjdnaksjdnsa
        </Typography>
        <Divider sx={{ mt: 3, mb: 2 }} />
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
        1 Followers
        </Typography>
    </Grid>
  );
};

export default ProfileInformation;