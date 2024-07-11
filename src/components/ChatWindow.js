// src/components/ChatWindow.js

import React from 'react';
import styled from 'styled-components';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const ChatWindow = ({ user }) => { // Receive user as a prop
  return (
    <ChatWindowContainer>
      <UserList />
      <MessageList />
      <MessageInput user={user} /> {/* Pass user to MessageInput */}
    </ChatWindowContainer>
  );
};

export default ChatWindow;
