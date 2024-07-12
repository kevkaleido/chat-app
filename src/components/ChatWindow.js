// src/components/ChatWindow.js

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const ChatWindowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3f51b5;
  color: white;
`;

const LogoutButton = styled.button`
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatWindow = ({ user }) => {
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  if (!user) {
    return <p>Please log in to see the chat.</p>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <ChatWindowContainer>
      <Header>
        <h2>Chat Room</h2>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <MessageList user={user} />
      <MessageInput user={user} />
      <div ref={chatEndRef} />
    </ChatWindowContainer>
  );
};

export default ChatWindow;
