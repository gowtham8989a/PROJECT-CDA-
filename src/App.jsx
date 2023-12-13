// src/App.jsx
import React from 'react';
import Login from './Login';

function App() {
  return (
    <div className="App">
      {/* Use 'classic', 'advanced', or 'professional' as the background style */}
      <Login backgroundStyle="advanced" />
    </div>
  );
}

export default App;
