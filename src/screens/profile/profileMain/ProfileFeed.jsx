import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/joy';
import PhotoPost from './PhotoPost'; // Importa tu componente PhotoPost aquí
import ProfileRight from './ProfileRight'; // Importa tu componente PhotoPost aquí

const ProfileFeed = () => {
  // Supongamos que tienes una lista de publicaciones
  const posts = [
    {
      id: 1,
      username: 'John Doe',
      userAvatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      timestamp: '2 hours ago',
      caption: '¡Mi primera publicación en Twitter!',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
      likes: 10,
      retweets: 5,
      shares: 2,
    },
    {
      id: 2,
      username: 'Jane Smith',
      userAvatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      timestamp: '5 hours ago',
      caption: '¡Hola, mundo!',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
      likes: 20,
      retweets: 8,
      shares: 4,
    },
    {
      id: 1,
      username: 'John Doe',
      userAvatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      timestamp: '2 hours ago',
      caption: '¡Mi primera publicación en Twitter!',
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      likes: 10,
      retweets: 5,
      shares: 2,
    },
    {
      id: 1,
      username: 'John Doe',
      userAvatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      timestamp: '2 hours ago',
      caption: '¡Mi primera publicación en Twitter!',
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
      likes: 10,
      retweets: 5,
      shares: 2,
    },
    // Agrega más objetos de publicaciones aquí
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Grid container spacing={2} justifyContent="center">
          {posts.map((post) => (
            <Grid item key={post.id} xs={6} md={6} lg={8} sx= {{marginBottom: '40px'}}>
              <PhotoPost post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfileFeed;
