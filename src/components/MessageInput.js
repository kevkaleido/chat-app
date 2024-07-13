import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
`;

const MessageInput = ({ user }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages
  
    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        user: user.email,
        createdAt: new Date(),
      });
      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error adding message: ', error);
    }
  };
  

  return (
    <InputContainer>
      <Input
        type="text"
        value={message}
        onChange={handleInputChange} // Use a separate handler for input change
        placeholder="Type a message..."
      />
      <Button onClick={sendMessage}>Send</Button>
    </InputContainer>
  );
};

export default MessageInput;
