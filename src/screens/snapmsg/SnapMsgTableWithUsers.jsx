import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { defaultTheme } from '../../constants';
import ModalAndImage from '../../components/ModalAndImage';
import { formatDateToUTC } from '../../utils/DateTransformer.jsx';

const secondary_colour = defaultTheme.palette.secondary.main;

export default function SnapMsgTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        {/**Head: */}
        <TableHead>
          <TableRow>
            <TableCell sx = {{color: secondary_colour}}>User's email</TableCell>
            <TableCell sx = {{color: secondary_colour}}>SnapMsg</TableCell>
            <TableCell sx = {{color: secondary_colour}} align="right">Image</TableCell>
            <TableCell sx = {{color: secondary_colour}} align="right">Likes</TableCell>
            <TableCell sx = {{color: secondary_colour}} align="right">Shares</TableCell>
            <TableCell sx = {{color: secondary_colour}} align="right">Created at</TableCell>
          </TableRow>
        </TableHead>

        {/**Body: */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={[row.poster, row.created_at]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.poster}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.body}
                </TableCell>
                <TableCell align="right"><ModalAndImage image_src = {row.image} /></TableCell>
                <TableCell align="right">{row.likes}</TableCell>
                <TableCell align="right">{row.shares}</TableCell>
                <TableCell align="right">{formatDateToUTC(row.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table> {/**End of table */}
    </TableContainer>
  );
}