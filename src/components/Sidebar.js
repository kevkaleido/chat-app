// src/components/Sidebar.js

import React from 'react'; // Import React library
import styled from 'styled-components'; // Import styled-components for styling

const SidebarContainer = styled.div` // Styled component for Sidebar container
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Sidebar</h2> {/* Sidebar title */}
      {/* Add additional sidebar content here */}
    </SidebarContainer>
  );
};

export default Sidebar; // Export Sidebar component as default
