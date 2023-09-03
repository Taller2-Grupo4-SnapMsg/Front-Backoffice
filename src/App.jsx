import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './screens/Home';
import Singin from './screens/Singin';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Singin" element={<Singin />} />
      </Routes>
    </Router>
  );
}

export default App;
