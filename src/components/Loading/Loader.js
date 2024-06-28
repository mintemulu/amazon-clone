import React from 'react';
import { FadeLoader } from 'react-spinners';

function Loader() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: adds a background to cover the rest of the content
        zIndex: 9999 // Ensure it appears above other content
    }}>
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
