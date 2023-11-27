import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';

import { API_URL } from '../../constants';

const ServiceStatus = ({ service, setDate, setDescription }) => {
    const [isUp, setStatus] = useState(false);
    const lower_name = service.name.toLowerCase();
    useEffect(() => {
    const checkServiceStatus = async () => {
        try {
        const response = await fetch(API_URL + '/service_status?service=' + lower_name);
        if (response.status === 200) {
            setStatus(true);
            const data = await response.json();
            setDate(data.creation_date);
            setDescription(data.description);
        } else {
            setStatus(false);
        }
        } catch (error) {
        setStatus(false);
        }
    };

    checkServiceStatus();
    }, [service.name]);

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
