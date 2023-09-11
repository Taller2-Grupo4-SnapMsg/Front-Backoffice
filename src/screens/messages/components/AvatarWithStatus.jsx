import React from 'react';
import Badge from '@mui/joy/Badge';
import Avatar from '@mui/joy/Avatar';

export default function AvatarWithStatus({
  online = false,
  ...rest
}) {
  return (
    <div>
      <Badge
        color={online ? 'success' : 'neutral'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeInset="6px 6px"
      >
        <Avatar {...rest} />
      </Badge>
    </div>
  );
}

