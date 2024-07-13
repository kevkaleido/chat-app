import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import styled from 'styled-components';

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const MessageItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const UserInitial = styled.span`
  font-weight: bold;
  color: ${(props) => (props.sent ? '#3f51b5' : '#000')}; // Change color for sent messages
`;

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => doc.data());
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const getUserInitial = (userEmail, sent) => {
    const firstLetter = userEmail.charAt(0).toUpperCase();
    return <UserInitial sent={sent}>{firstLetter}</UserInitial>;
  };

  return (
    <ListContainer>
      {messages.map((message, index) => (
        <MessageItem key={index}>
          {getUserInitial(message.user, true)}: {message.text}
        </MessageItem>
      ))}
    </ListContainer>
  );
};

export default MessageList;
