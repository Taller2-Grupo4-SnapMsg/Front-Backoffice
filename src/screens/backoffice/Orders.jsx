import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Title from './Title';
import { useNavigate } from 'react-router-dom';


import GetUsersHandler from '../../service/GetUsers';

// Generate Order Data
function createData( username, name, last_name, email, date_of_birth) {
  return { username, name, last_name, email, date_of_birth };
}

const titleStyle = {
  color: '#947eb0',
  fontSize: '24px',
  fontWeight: 'bold',
};


export default function Orders() {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  const [pageNumber, setPage] = React.useState(1);
  const [loadingPage, setLoadingPage] = React.useState(true);
  const [query, setQuery] = React.useState(''); // Search query

  React.useEffect(() => {
    setLoadingPage(true);
    const fetchUsers = async () => {
      try {
        const response = await GetUsersHandler(query, pageNumber);
        // Assuming the response is an array of user objects
        const formattedRows = response.map((user, index) => {
          return createData(
            user.username,
            user.name,
            user.last_name,
            user.email,
            user.date_of_birth,
          );
        });
        setRows(formattedRows);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const loadData = async () => {
      try {
        await Promise.all([fetchUsers()]);
      } finally {
        setLoadingPage(false);
      }
    };
    loadData();

  }, [pageNumber, query]); // Run this when the page number or the query changes

  return (
    <React.Fragment>
      {/** Search bar + title */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Title style={titleStyle}>Users</Title>
        <Divider orientation="vertical" flexItem sx = {{margin: '1%'}} />
        <TextField                   
                id="Search user"
                label="Search user"
                name="Search user"
                autoComplete="query"
                color = "primary"
                fullWidth
                sx = {{ 
                  "& label.Mui-focused": {
                    color: "#A995C9"
                  }
                  }}
                value = {query}
                onChange={(e) => {setQuery(e.target.value), setPage(1)}}
                autoFocus />
      </Box>
      {/** Table */}
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: '23px', textAlign: 'center' }}>Username</TableCell>
            <TableCell style={{ fontSize: '23px', textAlign: 'center' }}>First Name</TableCell>
            <TableCell style={{ fontSize: '23px', textAlign: 'center' }}>Last Name</TableCell>
            <TableCell style={{ fontSize: '23px', textAlign: 'center' }}>Email</TableCell>
            <TableCell style={{ fontSize: '23px', textAlign: 'center' }}>See profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.username}</TableCell>
              <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.name}</TableCell>
              <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.last_name}</TableCell>
              <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>{row.email}</TableCell>
              <TableCell style={{ fontSize: '18px', textAlign: 'center' }}>
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
                  onClick={() => navigate(`/admin/users/${row.email}`)}
                >
                  Check Profile
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />

      {/* Pagination */}
      {loadingPage ? (
        <Pagination
            count={10000}
            siblingCount={5}
            boundaryCount={0}
            page={pageNumber}
            color="primary"
            disabled
            sx={{ margin: '1%', '.MuiPagination-ul': { justifyContent: 'space-around' } }}
        />
        ) : (
        <Pagination
            count={10000}
            page={pageNumber}
            siblingCount={5}
            boundaryCount={0}
            color="primary"
            onChange={(_, page) => setPage(page)}
            sx={{ margin: '1%', '.MuiPagination-ul': { justifyContent: 'space-around' } }}
        />
      )}
    </React.Fragment>
  );
}