import {react} from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DroneFeed from './components/dronefeed';
import Login from './components/Login';
import Register from './components/Register';
import LocationButton from './components/LocationButton';
import LiveFeed from './components/liveFeed';

const App= ()=>{
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/droneFeed" element={<DroneFeed />} />
            <Route path="/saveLocation" element={<LocationButton />} />
            <Route path="/getFeed" element={<LiveFeed />} />
        </Routes>
        </BrowserRouter>
    )

}

export default App;