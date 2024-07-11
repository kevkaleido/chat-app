// src/components/MessageList.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';  // Correct import for Firestore
import Message from './Message';

const MessageListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messages);
      });

    return unsubscribe;
  }, []);

  return (
    <MessageListContainer>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </MessageListContainer>
  );
};

export default MessageList;
