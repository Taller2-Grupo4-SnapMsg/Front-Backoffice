import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { defaultTheme } from '../../constants';
import ServiceStatus from './ServiceStatus';

const secondary_colour = defaultTheme.palette.secondary.main;


const ServiceTable = ({ services }) => {
    return (
        <ThemeProvider theme = {defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/**Head: */}
                    <TableHead>
                        <TableRow>
                            <TableCell sx = {{color: secondary_colour}}>Service</TableCell>
                            <TableCell sx = {{color: secondary_colour}}>Created at</TableCell>
                            <TableCell sx = {{color: secondary_colour}} align="left">Description</TableCell>
                            <TableCell sx = {{color: secondary_colour}} align='center'>Other?</TableCell>
                            <TableCell sx = {{color: secondary_colour}} align='center'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {/**Body: */}
                    <TableBody>
                    {services.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                ---- -- -- UTC
                            </TableCell>
                            <TableCell align="left">Que lindo backoffice</TableCell>
                            <TableCell align='center'>que?</TableCell>
                            <TableCell align='center'><ServiceStatus service={row} /></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table> 
                {/**End of table */}
            </Box>
        </ThemeProvider>
    );
};

export default ServiceTable;
