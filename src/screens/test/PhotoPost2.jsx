{/*const PhotoPost = ({ post }) => {

  const posts = [
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
  ];


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
};*/}