// src/components/MessageList.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import Message from './Message';

const MessageListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const LoadingMessage = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot(
        snapshot => {
          const messages = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setMessages(messages);
          setLoading(false);
        },
        error => {
          setError('Failed to load messages. Please try again.');
          setLoading(false);
        }
      );

    return unsubscribe;
  }, []);

  if (loading) {
    return <LoadingMessage>Loading messages...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <MessageListContainer>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </MessageListContainer>
  );
};

export default MessageList;
