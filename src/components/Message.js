// src/components/Message.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling

const MessageContainer = styled.div` // Styled component for Message container
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Message = () => {
  return (
    <MessageContainer>
      <p><strong>User:</strong> Message content</p> {/* Message content */}
      <span>Timestamp</span> {/* Message timestamp */}
    </MessageContainer>
  );
};

export default Message; // Export Message component as default
