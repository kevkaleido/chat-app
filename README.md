# Chat Application

## Overview
This project is a real-time chat application built with React and Firebase. The primary goal of this project is for me to learn the processes involved in setting up a full-stack application, including user authentication, real-time messaging, and responsive design using styled-components.

## Goals
- Understand how to set up a React application.
- Learn to use Firebase for authentication and real-time database functionality.
- Implement real-time messaging in a chat application.
- Design a responsive UI using styled-components.

## Features
- User Authentication (SignUp, Login, Logout)
- Real-time Messaging
- User List
- Responsive Design

## Component Hierarchy
- **App**
  - **Header**: Displays the chat room title and user-related actions (e.g., logout).
  - **Sidebar**: Optional component for additional navigation or information.
  - **ChatWindow**
    - **UserList**: Displays a list of active users.
    - **MessageList**: Renders a list of messages.
      - **Message**: Represents a single chat message.
    - **MessageInput**: Input field for users to type and send messages.

## Technologies Used
- React
- Firebase (Authentication and Realtime Database)
- styled-components

