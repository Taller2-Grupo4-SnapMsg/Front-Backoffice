import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Signin from './screens/signin/Signin';
import Signup from './screens/signup/Signup'
import Home from './screens/home/Home'
import Messages from './screens/messages/Messages'
import Notifications from './screens/notifications/Notifications'
import Explore from './screens/explore/Explore'
import Profile from './screens/profile/profileMain/Profile';
import ProfileSettings from './screens/profile/profileSettings/ProfileSettings';
import Test from './screens/test/Test'
import PINVerification from './screens/signup/PINVerification'
import PasswordRecovery from './screens/signin/PasswordRecovery'
import Dashboard from './screens/backoffice/Dashboard';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pin" element={<PINVerification />} />
        <Route path="*" element={<h1>Not Found</h1>} /> {/* If the path is not found, render this component */}
      </Routes>
    </Router>
  );
}

/*

        <Route path="/messages" element={<Messages />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/password_recovery" element={<PasswordRecovery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
*/

export default App;

