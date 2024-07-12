import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

// Main container for the layout
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Container for the main content (Sidebar and ChatWindow)
const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

// Ensure Sidebar and ChatWindow take appropriate space
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ user }) => {
  return (
    <LayoutContainer>
      <Header /> {/* Top Header */}
      <MainContent>
        <Sidebar /> {/* Sidebar on the left */}
        <Content>
          <ChatWindow user={user} /> {/* ChatWindow on the right */}
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
