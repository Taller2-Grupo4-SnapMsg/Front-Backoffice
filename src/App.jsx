import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Signin from './screens/signin/Signin';
import Test from './screens/test/Test';
import Dashboard from './screens/backoffice/Dashboard';
import SignUp from './screens/signup/Signup';

function App() {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Signin />}/>
        <Route path="/admin/signin" element={<Signin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/signup" element={<SignUp  />} />
        <Route path="/test" element={<Test />} />
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

