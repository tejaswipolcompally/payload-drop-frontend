import React, { useState } from 'react';
import Telemetry from './telemetry.js';
import GoogleEarth from './map.js';
import LiveFeed from './liveFeed.js';  // Case-sensitive match


const App = () => {
    const [coordinates, setCoordinates] = useState({
        latitude: 17.374107667554952, // Default latitude
        longitude: 78.5214 // Default longitude
    });

    const handleCoordinatesChange = (newCoordinates) => {
        setCoordinates(newCoordinates); // Update coordinates state with the new values
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar with Telemetry */}
            <div style={{ flex: 0.5 }}>
                <Telemetry coordinates={coordinates} onCoordinatesChange={handleCoordinatesChange} />
            </div>

            {/* Map and Camera Feed */}
            <div style={{ flex: 2.5, position: 'relative' }}>
                <GoogleEarth coordinates={coordinates} />

                {/* LiveFeed component */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
                    <LiveFeed />
                </div>
            </div>
        </div>
    );
};

export default App;
