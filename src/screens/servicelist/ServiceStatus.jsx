import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';

import { API_URL } from '../../constants';

const ServiceStatus = ({ service }) => {
    const [isUp, setStatus] = useState(false);
    console.log("ServiceName: " + service.name)
    useEffect(() => {
    const checkServiceStatus = async () => {
        try {
        //const response = await fetch(API_URL + '/status/' + serviceName);
        const response = { status: 200 };
        if (response.status === 200) {
            setStatus(true);
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
            <Badge color = "secondary" badgeContent={0}>
                {/**Tick: */}
                &#10004;
            </Badge>
        )
    }

    return (
        <Badge color = "secondary" badgeContent={0}>
            {/**Cross: */}
            &#10008;
        </Badge>
    )
};

export default ServiceStatus;
