import React, { useState, useEffect } from 'react';
import './AvatarSign.css';

const AvatarSign = () => {
  const [gesture, setGesture] = useState('neutral');

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating different gestures (for demo purposes)
      setGesture(prevGesture => (prevGesture === 'neutral' ? 'greeting' : 'neutral'));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="avatar-sign-container">
      <div className={`avatar ${gesture}`}>
        <div className="avatar-body"></div>
        <div className="avatar-head"></div>
        <div className="avatar-hands"></div>
      </div>
      <div className="avatar-description">
        <p>{gesture === 'neutral' ? 'Ready to communicate in sign language!' : 'Greeting you with sign language!'}</p>
      </div>
    </div>
  );
};

export default AvatarSign;
