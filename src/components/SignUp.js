// src/components/SignUp.js

import React, { useState } from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    setError('');
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('User registered successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Sign Up</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SignUpContainer>
  );
};

export default SignUp;
