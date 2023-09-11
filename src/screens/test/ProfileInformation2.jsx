import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/joy';

const UserProfile = () => {
  return (
    <Box className="h-100 gradient-custom-2">
      <Grid container justifyContent="center" alignItems="center" className="h-100">
        <Grid item xs={12} lg={9} xl={7}>
          <Card elevation={3}>
            <CardHeader
              title={
                <Box display="flex" alignItems="center" style={{ backgroundColor: '#000', height: '200px' }}>
                  <Box ml={4} mt={5} display="flex" flexDirection="column" style={{ width: '150px' }}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="User avatar"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: '150px', zIndex: 1 }}
                    />
                    <Button variant="outlined" color="dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                      Edit profile
                    </Button>
                  </Box>
                  <Box ml={3} style={{ marginTop: '130px' }}>
                    <Typography variant="h5">Andy Horwitz</Typography>
                    <Typography>New York</Typography>
                  </Box>
                </Box>
              }
            />
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
            <CardContent>
              <Box>
                <Typography variant="h6" gutterBottom>About</Typography>
                <Box p={4} style={{ backgroundColor: '#f8f9fa' }}>
                  <Typography variant="body1" fontStyle="italic" gutterBottom>Web Developer</Typography>
                  <Typography variant="body1" fontStyle="italic" gutterBottom>Lives in New York</Typography>
                  <Typography variant="body1" fontStyle="italic">Photographer</Typography>
                </Box>
              </Box>
              <Box mt={4}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">Recent photos</Typography>
                  <Typography variant="body2">
                    <a href="#!" className="text-muted">Show all</a>
                  </Typography>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="Image 1"
                      className="w-100 rounded-3"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="Image 2"
                      className="w-100 rounded-3"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="Image 3"
                      className="w-100 rounded-3"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="Image 4"
                      className="w-100 rounded-3"
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
