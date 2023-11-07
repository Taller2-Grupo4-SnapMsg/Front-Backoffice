import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import Title from './Title';
import { useNavigate } from 'react-router-dom';


import GetUsersHandler from '../../service/GetUsers';

// Generate Order Data
function createData( username, name, last_name, email, date_of_birth) {
  return { username, name, last_name, email, date_of_birth };
}

function preventDefault(event) {
  event.preventDefault();
}

const titleStyle = {
  color: '#947eb0',
  fontSize: '24px',
  fontWeight: 'bold',
};


export default function Orders() {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetUsersHandler(navigate);
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

    fetchUsers();
  }, []); // Run this effect only once when component mounts


  return (
    <React.Fragment>
      <Title style={titleStyle}>Users</Title>
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

      <Link color="#947eb0" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more users
      </Link>
    </React.Fragment>
  );
}