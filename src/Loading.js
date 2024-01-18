import React from 'react';

function Loading() {
  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const pulseStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite',
  };

  return (
    <div style={loadingStyle}>
      <div style={pulseStyle}></div>
    </div>
  );
}

export default Loading;

// Añade esto en tu archivo CSS global o en un <style> tag en tu HTML
/*
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
*/
