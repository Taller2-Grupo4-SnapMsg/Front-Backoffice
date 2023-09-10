import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileSettingsButton() {
  return (
    <Link to="/profile/settings" style={{ textDecoration: 'none' }}>
      <button>Settings</button>
    </Link>
  );
}