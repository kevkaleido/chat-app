// src/components/ChatWindow.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling
import UserList from './UserList'; // Import UserList component
import MessageList from './MessageList'; // Import MessageList component
import MessageInput from './MessageInput'; // Import MessageInput component

const ChatWindowContainer = styled.div` // Styled component for ChatWindow container
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const ChatWindow = () => {
  return (
    <ChatWindowContainer>
      <UserList /> {/* Render UserList component */}
      <MessageList /> {/* Render MessageList component */}
      <MessageInput /> {/* Render MessageInput component */}
    </ChatWindowContainer>
  );
};

export default ChatWindow; // Export ChatWindow component as default
