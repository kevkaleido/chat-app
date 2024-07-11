// src/components/MessageList.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling
import Message from './Message'; // Import Message component

const MessageListContainer = styled.div` // Styled component for MessageList container
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const MessageList = () => {
  return (
    <MessageListContainer>
      {/* Render list of Message components */}
      <Message /> {/* Render single Message component */}
      <Message /> {/* Render single Message component */}
    </MessageListContainer>
  );
};

export default MessageList; // Export MessageList component as default
