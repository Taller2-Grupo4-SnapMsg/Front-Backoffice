import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

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
  
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await GetUsersHandler();
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
            <TableCell style={{ fontSize: '23px' }}>Username</TableCell>
            <TableCell style={{ fontSize: '23px' }}>First Name</TableCell>
            <TableCell style={{ fontSize: '23px' }}>Last Name</TableCell>
            <TableCell style={{ fontSize: '23px' }}>Email</TableCell>
            <TableCell style={{ fontSize: '23px' }}>Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell style={{ fontSize: '18px' }}>{row.username}</TableCell>
              <TableCell style={{ fontSize: '18px' }}>{row.name}</TableCell>
              <TableCell style={{ fontSize: '18px' }}>{row.last_name}</TableCell>
              <TableCell style={{ fontSize: '18px' }}>{row.email}</TableCell>
              <TableCell style={{ fontSize: '18px' }}>{row.date_of_birth}</TableCell>
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