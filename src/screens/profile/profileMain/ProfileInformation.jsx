import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';


const buttonStyles = {
  zIndex: 1,
  backgroundColor: '#7E6C9C',
  borderRadius: '25px',
  transition: 'background-color 0.3s ease', // Transition for background-color
  '&:hover': {
    backgroundColor: '#947EB0',
  },
};

const UserProfile = () => {
  return (
    <Box sx={{marginBottom: '40px', border: '0px'}}>
      <Grid>
        <Grid>
          <Card elevation={3} sx={{background: 'transparent', borderRadius: '0px', borderLeft: '0px', borderRight: '0px'}}>
            <CardContent  style={{   boxShadow: '0 0 5px 0 #7E6C9C',
            borderRadius: '25px', 
            padding: '20px', // Adjust padding as needed
          }}>
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
                  <Box style={{ position: 'absolute', top: 0, right: 0, paddingRight: '25px'}}>
                    <Link to="/profile/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button
                      variant="solid"  
                      sx={buttonStyles}
                    >        
                      Edit profile
                    </Button>
                    </Link>
                  </Box>
                  {/* Name */}
                  <Typography level="title-lg">Nati y Lari</Typography>
                  {/* Username */}
                  <Typography level="body-sm" variant="h5" sx={{color: '#7E6C9C'}}>@natiylari</Typography>
                  {/* Biography */}
                  <Typography level="body-md" sx={{paddingTop: '10px'}}>Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit.asdasdasdasdasdsdsdsad
                    asndabajsdjan                     aksdnassdnjasndasjnds
                  </Typography>
                </Box>

              </Box>
            </CardContent>

            <CardContent>
              <Grid container direction="column">
                {/* First Row */}

                
                <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                  {/* First Column in First Row */}
                  <Grid item xs={6} sx={{paddingLeft: '50px'}}>
                  <Typography level="body-sm" color="textSecondary">
                    <span style={{ color: '#7E6C9C', fontWeight: 'bold' }}>1000</span> Followers
                      </Typography>
                  </Grid>



                  {/* Second Column in First Row */}
                  <Grid item xs={6}>
                  <Typography level="body-sm" color="textSecondary">
                      <span style={{ color: '#7E6C9C', fontWeight: 'bold', paddingLeft: '5px'}}>3</span> Following
                    </Typography>
                  </Grid>
                </Grid>
                
                {/* Second Row */}
                <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                  {/* First Column in First Row */}
                  <Grid item xs={6} sx={{paddingLeft: '50px'}}>
                    <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{alignItems: 'center'}}>
                        <CalendarMonthIcon style={{ fontSize: '20px' }} /> {/* Adjust the fontSize here */}
                      </div>
                      <Typography level="body-sm" variant="h5" sx={{paddingLeft: '10px'}}>Joined May 2022</Typography>
                    </ListItem>
                  </Grid>



                  {/* Second Column in First Row */}
                  <Grid item xs={6}>
                    <ListItem style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{alignItems: 'center'}}>
                        <LocationOnIcon style={{ fontSize: '20px'}} /> {/* Adjust the fontSize here */}
                      </div>
                      <Typography level="body-sm" variant="h5" sx={{paddingLeft: '10px'}}>Ciudad Autónoma de Buenos Aires</Typography>
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
