import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #3f51b5;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Y o👌</h1>
    </HeaderContainer>
  );
};

export default Header;
