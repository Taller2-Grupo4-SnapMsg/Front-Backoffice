import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import HandleBlockUser from '../../service/HandleBlockUser';


export default function BlockingButton(email, blocked) {
    const [loading, setLoading] = useState(false);
    if (loading) {
        return (
            <Button
            type="submit"
            fullWidth
            disabled
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            <CircularProgress margin = "normal" color="inherit" />
          </Button>
        )
    }

    // Unblock Button:
    if (email.blocked) {
        return (
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#947EB0",
              '&:hover': {
                backgroundColor: "#6B5A8E",
              },
            }}
            onClick={() => HandleBlockUser(setLoading, email.email, false)}
          >
            Unblock User
          </Button>
        )
    }
    // Block Button:
    return (
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#CC0000",
          '&:hover': {
            backgroundColor: "#B30000",
          },
        }}
        onClick={() => HandleBlockUser(setLoading, email.email, true)}
      >
        Block User
      </Button>
    )
}