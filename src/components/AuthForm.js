import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
import styled from 'styled-components';

const AuthContainer = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  max-width: 200px;
`;

const Button = styled.button`
  padding: 5px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 5px;
  flex: 1;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContainer>
      <h2>SignUp or Login</h2>
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
      <ButtonContainer>
        <Button onClick={handleSignUp}>Sign Up</Button>
        <Button onClick={handleLogin}>Login</Button>
      </ButtonContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AuthContainer>
  );
};

export default AuthForm;
