// src/components/MessageInput.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

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

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const MessageInput = ({ user }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    if (message.trim()) {
      setLoading(true);
      setError('');
      try {
        await db.collection('messages').add({
          text: message,
          createdAt: new Date(),
          uid: user.uid,
          displayName: user.displayName,
        });
        setMessage('');
      } catch (error) {
        setError('Failed to send message. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <MessageInputContainer>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        disabled={loading}
      />
      <Button onClick={handleSendMessage} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MessageInputContainer>
  );
};

export default MessageInput;
