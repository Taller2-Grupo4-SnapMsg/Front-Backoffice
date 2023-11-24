import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Signin from './screens/signin/Signin';
import Dashboard from './screens/backoffice/Dashboard';
import SignUp from './screens/signup/Signup';
import UserProfile from './screens/userprofile/UserProfile';
import SnapMsg from './screens/snapmsg/SnapMsg';
import ServiceList from './screens/servicelist/ServiceList';

function App() {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Signin />}/>
        <Route path="/admin/signin" element={<Signin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/signup" element={<SignUp  />} />
        <Route path="/admin/users/:email" element={<UserProfile  />} />
        <Route path="/admin/snapmsg" element={<SnapMsg />} />
        <Route path="/admin/service_status" element={<ServiceList />} />
        <Route path="*" element={<h1>Not Found</h1>} /> {/* If the path is not found, render this component */}
      </Routes>
    </Router>
  );
}

export default App;

