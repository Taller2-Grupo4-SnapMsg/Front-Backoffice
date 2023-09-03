import Login from './screens/messages/Messages'
import Home from './screens/home/Home'
import Messages from './screens/messages/Messages'
import Notifications from './screens/notifications/Notifications'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App () {
    return (
    <Router>
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    </Router>
    );
}

export default App;
