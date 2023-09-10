import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Signin from './screens/signin/Signin';
import Home from './screens/home/Home'
import Messages from './screens/messages/Messages'
import Notifications from './screens/notifications/Notifications'
import Login from './screens/login/Login'
import Test from './screens/test/Test'
import Profile from './screens/profile/Profile';
import ProfileSettings from './screens/profile/profileSettings/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
        <Route path="*" element={<h1>Not Found</h1>} /> {/* If the path is not found, render this component */}
      </Routes>
    </Router>
  );
}

export default App;

