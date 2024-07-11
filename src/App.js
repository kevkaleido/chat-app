// src/App.js

import React, { useState, useEffect } from 'react'; // Import React, useState and useEffect hooks
import { auth } from './firebase'; // Import Firebase auth
import Header from './components/Header'; // Import Header component
import Sidebar from './components/Sidebar'; // Import Sidebar component
import ChatWindow from './components/ChatWindow'; // Import ChatWindow component
import SignUp from './components/SignUp'; // Import SignUp component
import Login from './components/Login'; // Import Login component

const App = () => {
  const [user, setUser] = useState(null); // State for the authenticated user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user state if authenticated
      } else {
        setUser(null); // Clear user state if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div className="app">
      {user ? ( // Conditionally render based on user authentication state
        <>
          <Header /> {/* Render Header component */}
          <div className="main">
            <Sidebar /> {/* Render Sidebar component */}
            <ChatWindow /> {/* Render ChatWindow component */}
          </div>
        </>
      ) : (
        <>
          <SignUp /> {/* Render SignUp component */}
          <Login /> {/* Render Login component */}
        </>
      )}
    </div>
  );
};

export default App; // Export App component as default
