import React, { useEffect, useState } from 'react';
import './Telemetry.css';

const Telemetry = ({ coordinates, onCoordinatesChange }) => {
    const [data, setData] = useState({
        altitude: '',
        speed: '',
        battery: '',
        gpsStatus: ''
    });

    const [manualCoordinates, setManualCoordinates] = useState({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
    });

    useEffect(() => {
        const fetchTelemetryData = async () => {
            try {
                const response = await fetch('/api/telemetry');
                const telemetryData = await response.json();
                setData(telemetryData);
            } catch (error) {
                console.error('Error fetching telemetry data:', error);
            }
        };

        fetchTelemetryData();
        const intervalId = setInterval(fetchTelemetryData, 5000); 

        return () => clearInterval(intervalId); 
    }, []);

    const handleSetCoordinates = () => {
        onCoordinatesChange(manualCoordinates); // Send manual coordinates to parent (App.js)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setManualCoordinates((prevCoords) => ({
            ...prevCoords,
            [name]: parseFloat(value) // Ensure that coordinates are in number format
        }));
    };

    return (
        <div className="telemetry">
            <h2 className="telemetry-heading">Altitude</h2>
            <p className="telemetry-value">{data.altitude} m</p>
            <h2 className="telemetry-heading">Speed</h2>
            <p className="telemetry-value">{data.speed} m/s</p>
            <h2 className="telemetry-heading">Battery</h2>
            <p className="telemetry-value">{data.battery}%</p>
            <h2 className="telemetry-heading">GPS Status</h2>
            <p className="telemetry-value">{data.gpsStatus}</p>
            <h2 className="telemetry-heading">Latitude</h2>
            <input
                type="number"
                name="latitude"
                value={manualCoordinates.latitude}
                onChange={handleInputChange}
            />
            <h2 className="telemetry-heading">Longitude</h2>
            <input
                type="number"
                name="longitude"
                value={manualCoordinates.longitude}
                onChange={handleInputChange}
            />

            <button onClick={handleSetCoordinates}>Set Coordinates</button>
        </div>
    );
};

export default Telemetry;
