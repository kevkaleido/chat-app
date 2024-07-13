import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import AuthForm from './components/AuthForm';

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
         
            <ChatWindow user={user} />
          </div>
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};

export default App;