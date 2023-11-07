import React from 'react';
import { useParams } from 'react-router-dom';
import FetchUser from '../../service/FetchUser';

function UserProfile() {
  const { email } = useParams();
  const user = FetchUser(email);
  return (
    <div>
      {/* Display user information here */}
      <h1>User Profile</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Username: {user.username}</p>
      <p>Date of Birth: {user.dateOfBirth}</p>
      <p>Location: {user.location}</p>
      <p>Timestamp: {user.timestamp}</p>
    </div>
  );
}

export default UserProfile;