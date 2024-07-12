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
  if (!user) {
    return <p>Please log in to see the chat.</p>;
  }

  return (
    <ChatWindowContainer>
      <MessageList user={user} />
      <MessageInput user={user} />
    </ChatWindowContainer>
  );
};

export default ChatWindow;
