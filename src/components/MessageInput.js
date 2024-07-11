// src/components/MessageInput.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';  // Correct import for Firestore

const MessageInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
`;

const MessageInput = ({ user }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (message.trim()) {
      await db.collection('messages').add({
        text: message,
        createdAt: new Date(),
        uid: user.uid,
        displayName: user.displayName,
      });
      setMessage('');
    }
  };

  return (
    <MessageInputContainer>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </MessageInputContainer>
  );
};

export default MessageInput;
