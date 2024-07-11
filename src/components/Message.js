// src/components/Message.js

import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Message = ({ message }) => { // Receive message as a prop
  return (
    <MessageContainer>
      <p><strong>{message.user}:</strong> {message.text}</p>
      <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
    </MessageContainer>
  );
};

export default Message;
