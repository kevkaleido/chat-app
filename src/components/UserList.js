// src/components/UserList.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling

const UserListContainer = styled.div` // Styled component for UserList container
  background-color: #e0e0e0;
  padding: 10px;
`;

const UserList = () => {
  return (
    <UserListContainer>
      <h3>Active Users</h3> {/* UserList title */}
      {/* Add user items here */}
    </UserListContainer>
  );
};

export default UserList; // Export UserList component as default
