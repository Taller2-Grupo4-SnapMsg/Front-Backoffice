import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Divider,
  Tooltip,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardHeader from '@mui/material/CardHeader';
import Sheet from '@mui/joy/Sheet';

import GlobalStyles from '@mui/joy/GlobalStyles';

const PhotoPost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
  };

  return (
    <Card elevation={3} className="photo-post">
      <CardHeader
        avatar={<Avatar src={post.userAvatar} alt={post.username} />}
        title={post.username}
        subheader={post.timestamp}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary">
          {post.caption}
        </Typography>
        {post.imageUrl && (
          <CardMedia
            component="img"
            alt={post.caption}
            height="auto"
            image={post.imageUrl}
          />
        )}
      </CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Tooltip title={liked ? 'Unlike' : 'Like'} placement="top">
          <IconButton
            onClick={handleLike}
            color={liked ? 'error' : 'default'}
            aria-label="Like"
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Comment" placement="top">
          <IconButton color="default" aria-label="Comment">
            <ChatIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={retweeted ? 'Undo Retweet' : 'Retweet'} placement="top">
          <IconButton
            onClick={handleRetweet}
            color={retweeted ? 'primary' : 'default'}
            aria-label="Retweet"
          >
            <RepeatIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share" placement="top">
          <IconButton color="default" aria-label="Share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography variant="body2" color="textSecondary">
          {liked ? '1 Like' : '0 Likes'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {retweeted ? '1 Retweet' : '0 Retweets'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.shares} Shares
        </Typography>
        </Box>
    </Card>
  );
};

export default PhotoPost;
