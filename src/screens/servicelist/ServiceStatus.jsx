import React from 'react';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';


const ServiceStatus = ({ isUp }) => {
    if (isUp) {
        return (
            <Paper elevation = {0} sx = {{color: "green"}}>
                <Badge color = "secondary" badgeContent={0}>
                    Available
                </Badge>
            </Paper>
        )
    }

    return (
        <Paper elevation = {0} sx = {{color: "red"}}>
            <Badge color = "secondary" badgeContent={0}>
                Unavailable
            </Badge>
        </Paper>
    )
};

export default ServiceStatus;
