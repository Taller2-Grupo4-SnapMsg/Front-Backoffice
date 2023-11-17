import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import HandleBlockUser from '../../service/HandleBlockUser';

export default function BlockingButton({ email, blocked }) {
    const [loading, setLoading] = useState(false);
    const [isBlocked, setIsBlocked] = useState(blocked);

    useEffect(() => {
        setIsBlocked(blocked);
    }, [blocked]);

    const handleBlockUser = async (shouldBlock) => {
        try {
            setLoading(true);
            await HandleBlockUser(setLoading, email, shouldBlock);
            setIsBlocked(shouldBlock);
        } catch (error) {
            console.error('Error blocking/unblocking user: ', error.message);
            setLoading(false);
        }
    };

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
                <CircularProgress margin="normal" color="inherit" />
            </Button>
        );
    }

    if (isBlocked) {
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
                onClick={() => handleBlockUser(false)}
            >
                Unblock User
            </Button>
        );
    }

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
            onClick={() => handleBlockUser(true)}
        >
            Block User
        </Button>
    );
}
