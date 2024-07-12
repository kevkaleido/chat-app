import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2></h2>
      {/* Add additional sidebar content here */}
    </SidebarContainer>
  );
};

export default Sidebar;
