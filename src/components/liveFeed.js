import React, { useRef } from 'react';

const LiveFeed = () => {
    const videoRef = useRef(null);

    const handlePiP = async () => {
        if (videoRef.current) {
            try {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                } else {
                    await videoRef.current.requestPictureInPicture();
                }
            } catch (error) {
                console.error('Error toggling PiP:', error);
            }
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Drone Live Camera Feed</h2>
            <video
                ref={videoRef}
                src="your-drone-camera-feed-url"  // Replace with actual feed URL
                width="600"
                height="400"
                controls
                autoPlay
                style={{ border: '1px solid black' }}
            >
                Your browser does not support the video tag.
            </video>
            <br />
            <button onClick={handlePiP} style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
                Toggle PiP Mode
            </button>
        </div>
    );
};

export default LiveFeed;
