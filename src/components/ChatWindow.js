// src/components/ChatWindow.js

import React from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ChatWindow = ({ user }) => {
  return (
    <ChatWindowContainer>
      <MessageList />
      <MessageInput user={user} />
    </ChatWindowContainer>
  );
};

export default ChatWindow;
