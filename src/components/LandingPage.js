import React, { useState } from 'react';
import Telemetry from './telemetry.js';
import MapComponent from './map.js';
import LiveFeed from './liveFeed.js';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
    const [coordinates, setCoordinates] = useState({
        latitude: 17.374107667554952,
        longitude: 78.5214,
    });

    const [isLiveFeedVisible, setIsLiveFeedVisible] = useState(false);

    const handleCoordinatesChange = (newCoordinates) => {
        setCoordinates(newCoordinates);
    };

    const toggleLiveFeed = () => {
        setIsLiveFeedVisible((prev) => !prev);
    };

    return (
        <div className="landing-page">
            {/* Top Bar */}
            <div className="top-bar">
                <h1 className="title">Drone Dashboard</h1>
                <button className="toggle-button" onClick={toggleLiveFeed}>
                    {isLiveFeedVisible ? 'Hide Drone Camera' : 'Show Drone Camera'}
                </button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Sidebar */}
                <div className="sidebar">
                    <Telemetry coordinates={coordinates} onCoordinatesChange={handleCoordinatesChange} />
                </div>

                {/* Map and Conditional LiveFeed */}
                <div className="map-container">
                    <MapComponent coordinates={coordinates} />

                    {isLiveFeedVisible && (
                        <div className="live-feed">
                            <LiveFeed />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
