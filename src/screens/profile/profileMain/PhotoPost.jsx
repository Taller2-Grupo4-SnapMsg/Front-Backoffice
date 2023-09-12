import React, { useState } from 'react';
import {CardActions} from '@mui/material';
import {Card, Avatar, Button, Badge} from '@mui/joy';
import Box from '@mui/material/Box';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardHeader from '@mui/material/CardHeader';
import Sheet from '@mui/joy/Sheet';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import {CardContent, Typography } from '@mui/joy';
import CardMedia from '@mui/material/CardMedia';


function PhotoPost({ post }) {

  const buttonStyle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginRight: '8px',
  };

  const iconStyle = {
    marginRight: '4px',
    fontSize: '18px',
  };

  return (

    <Card style={{ marginBottom: '16px' }}>

  <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Avatar src={post.userAvatar} alt={post.username} sx={{ marginRight: '8px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '25px', marginRight: '8px' }}>
            {post.username}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {post.timestamp}
          </Typography>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="Like">
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </CardContent>


      <CardContent style={{ alignItems:'center' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', alignSelf: 'justificate'}}>{post.caption}</Typography>
        <img src={post.imageUrl} alt="Publicación" style={{ maxWidth: '80%'}} />
      </CardContent>


      <CardActions style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="Like">
            <FavoriteBorderIcon />
            <span>10</span> {}
          </IconButton>
          <IconButton aria-label="Retweet">
            <RepeatIcon />
            <span>5</span> {}
          </IconButton>
          <IconButton aria-label="Compartir">
            <ShareIcon />
            <span>3</span> {}
          </IconButton>
        </div>
    </CardActions>
    </Card>
  );
}

export default PhotoPost;
