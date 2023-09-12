import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListItem from '@mui/joy/ListItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';

const buttonStyles = {
  zIndex: 1,
  backgroundColor: '#7E6C9C',
  borderRadius: '25px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#947EB0',
  },
};

const UserProfile = () => {
  return (
    <Box sx={{ marginBottom: '40px', border: '0px' }}>
      <Grid>
        <Grid>
          <Card elevation={3} sx={{ background: 'transparent', borderRadius: '0px', borderLeft: '0px', borderRight: '0px' }}>
  <CardContent style={{ boxShadow: '0 0 5px 0 #7E6C9C', borderRadius: '25px', padding: '20px', position: 'relative' }}>
    {/* First part: Edit button */}
    {/* Second part: Avatar on the left, profile information on the right */}
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px' }}>
        <Link to="/profile/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="solid" sx={buttonStyles}>
            Edit Profile
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="column" alignItems="center">
          <Avatar
            alt="User avatar"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
            className="mt-4 mb-2"
            style={{ width: '150px', height: '150px' }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
        <Grid container direction="column">
          <Typography level="title-lg" sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            Nati y Lari
          </Typography>
          <Typography level="body-sm" variant="h5" sx={{ color: '#7E6C9C', display: 'flex', justifyContent: 'center' }}>
            @natiylari
          </Typography>
          
          <Typography level="body-md" sx={{ padding: '0 80px', paddingTop: '10px', textAlign: 'justify' }}>
          In the quiet, serene countryside, where the rolling hills meet the endless horizon, the sunsets paint the sky with hues of orange and pink that seem to stretch on forever. Birds chirp merrily in the trees, and a gentle breeze rustles the leaves, creating a soothing symphony of nature's own composition
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </CardContent>



              <CardContent>
              <Grid container direction="column">
                {/* First Row */}
                <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                  {/* First Column in First Row */}
                  <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography level="body-sm" color="textSecondary">
                      <span style={{ color: '#7E6C9C', fontWeight: 'bold' }}>1000</span> Followers
                    </Typography>
                  </Grid>

                  {/* Second Column in First Row */}
                  <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography level="body-sm" color="textSecondary">
                      <span style={{ color: '#7E6C9C', fontWeight: 'bold' }}>3</span> Following
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography level="body-sm" color="textSecondary">
                      <span style={{ color: '#7E6C9C', fontWeight: 'bold' }}>456777</span> Snaps
                    </Typography>
                  </Grid>
                </Grid>

                {/* Second Row */}
                <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                  {/* First Column in Second Row */}
                  <Grid item xs={12} sm={6}>
                    <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                      <CalendarMonthIcon style={{ fontSize: '20px' }} />
                      <Typography level="body-sm" variant="h5" sx={{paddingLeft: '10px'}}>Joined May 2022</Typography>
                    </ListItem>
                  </Grid>

                  {/* Second Column in Second Row */}
                  <Grid item xs={12} sm={6}>
                    <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                      <LocationOnIcon style={{ fontSize: '20px' }} />
                      <Typography level="body-sm"   sx={{paddingLeft: '10px', textAlign: 'center'}}>Ciudad Autónoma de Buenos Aires</Typography>
                    </ListItem>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>

          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;


