// src/App.js

import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Ensure correct import
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="main">
            <Sidebar />
            <ChatWindow user={user} />
          </div>
        </>
      ) : (
        <>
          <SignUp />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
