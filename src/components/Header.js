// src/components/Header.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling

const HeaderContainer = styled.div` // Styled component for Header container
  background-color: #3f51b5;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Chat Room</h1> {/* Header title */}
    </HeaderContainer>
  );
};

export default Header; // Export Header component as default
