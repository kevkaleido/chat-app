// src/components/SignUp.js

import React, { useState } from 'react'; // Import React and useState hook
import { auth } from '../firebase'; // Import Firebase auth
import styled from 'styled-components'; // Import styled-components for styling

const SignUpContainer = styled.div` // Styled component for SignUp container
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input` // Styled component for input fields
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button` // Styled component for button
  padding: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
`;

const SignUp = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password); // Firebase sign-up method
      alert('User registered successfully');
    } catch (error) {
      alert(error.message); // Display error message if sign-up fails
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
      />
      <Button onClick={handleSignUp}>Sign Up</Button> {/* Sign up button */}
    </SignUpContainer>
  );
};

export default SignUp; // Export SignUp component as default
