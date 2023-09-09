import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';

export default function MessagesIcon() {
    return (
      <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
        <Badge color="secondary" badgeContent={5}>
          <EmailIcon />
        </Badge>
      </Stack>
    );
  }