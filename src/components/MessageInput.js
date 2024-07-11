// src/components/MessageInput.js

import React, { useState } from 'react'; // Import React and useState hook
import styled from 'styled-components'; // Import styled-components for styling

const MessageInputContainer = styled.div` // Styled component for MessageInput container
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input` // Styled component for input field
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button` // Styled component for button
  padding: 10px;
  margin-left: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
`;

const MessageInput = () => {
  const [message, setMessage] = useState(''); // State for message input

  const handleSendMessage = () => {
    // Implement message sending logic here
  };

  return (
    <MessageInputContainer>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state on input change
        placeholder="Type a message" // Input placeholder
      />
      <Button onClick={handleSendMessage}>Send</Button> {/* Send button */}
    </MessageInputContainer>
  );
};

export default MessageInput; // Export MessageInput component as default
