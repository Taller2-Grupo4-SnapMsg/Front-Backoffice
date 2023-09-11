import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';

const buttonStyles = {
  zIndex: 1,
  backgroundColor: '#7E6C9C',
  borderRadius: '25px',
  transition: 'background-color 0.3s ease', // Increased transition duration for smoother effect
  '&:hover': {
    backgroundColor: 'red', // Change to the desired hover color
  },
};

const UserProfile = () => {
  return (
    <Box>
      <Grid>
        <Grid>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center">
                {/* Left Column (Avatar) */}
                <Box style={{ padding: '5%' }}>
                  <Avatar
                    alt="User avatar"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    className="mt-4 mb-2"
                    style={{ width: '150px', height: '150px', zIndex: 1 }}
                  />
                </Box>
                {/* Right Column */}
                <Box style={{ flex: 1, padding: '5%', position: 'relative' }}>
                  {/* Edit Button */}
                  <Box style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Link to="/profile/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button
                      style={buttonStyles}
                    >
                      Edit profile
                    </Button>
                    </Link>
                  </Box>
                  {/* Name */}
                  <Typography variant="h5">Andy Horwitz</Typography>
                  {/* Username */}
                  <Typography>New York</Typography>
                  {/* Biography */}
                  <Typography variant="body2">Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </Box>

              </Box>
            </CardContent>

            <CardContent>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <Box textAlign="center">
                    <Typography variant="h5">253</Typography>
                    <Typography variant="body2" color="textSecondary">Photos</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box textAlign="center" px={3}>
                    <Typography variant="h5">1026</Typography>
                    <Typography variant="body2" color="textSecondary">Followers</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box textAlign="center">
                    <Typography variant="h5">478</Typography>
                    <Typography variant="body2" color="textSecondary">Following</Typography>
                  </Box>
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
