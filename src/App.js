import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Telemetry from './components/telemetry.js';
import GoogleEarth from './components/map.js';
import LiveFeed from './components/liveFeed.js';

const App = () => {
    const [coordinates, setCoordinates] = useState({
        latitude: 17.374107667554952, // Default latitude
        longitude: 78.5214 // Default longitude
    });

    const handleCoordinatesChange = (newCoordinates) => {
        setCoordinates(newCoordinates); // Update coordinates state with the new values
    };

    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {/* Navigation Menu */}
                <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex' }}>
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/live-feed">Live Feed</Link>
                </nav>

                {/* Routing */}
                <div style={{ flex: 1 }}>
                    <Routes>
                        {/* Home Page Route */}
                        <Route
                            path="/"
                            element={
                                <div style={{ display: 'flex', height: '100%' }}>
                                    {/* Sidebar for Telemetry */}
                                    <div style={{ flex: 0.5 }}>
                                        <Telemetry coordinates={coordinates} onCoordinatesChange={handleCoordinatesChange} />
                                    </div>
                                    {/* Main area for Map */}
                                    <div style={{ flex: 2.5 }}>
                                        <GoogleEarth coordinates={coordinates} />
                                    </div>
                                </div>
                            }
                        />
                        {/* Live Feed Page Route */}
                        <Route path="/live-feed" element={<LiveFeed />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
