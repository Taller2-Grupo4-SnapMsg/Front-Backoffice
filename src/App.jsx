import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Singin from './screens/singin/Singin';
import Home from './screens/home/Home'
import Messages from './screens/messages/Messages'
import Notifications from './screens/notifications/Notifications'

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Singin" element={<Singin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;

