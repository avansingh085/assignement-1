# Assignment-1: Secure Authentication with React & Redux

## Project Overview
This project implements a secure authentication system in React with the following features:
- **Login & Logout functionality**
- **Protected Dashboard** (accessible only when logged in)
- **Redux for State Management** (with security measures to prevent state inspection/modification)

## Tech Stack
- **React** (Frontend UI)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation & Protected Routes)


## Features
### 1️⃣ Authentication
- Users can log in using a simple form.
- Redux stores authentication status securely.

### 2️⃣ Protected Route
- The **Dashboard page** is only accessible if the user is logged in.
- **React Router** guards against unauthorized access.

### 3️⃣ State Management Security
- Redux state is **protected from browser inspection** by:
  - Storing authentication tokens securely.
  - Using Redux's `createSlice()` to prevent direct state mutations.
  - Disabling Redux DevTools in production.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd assignment-1
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the project:
   ```sh
   npm run dev
   ```

## Security Measures in Redux
- **Disable Redux DevTools in production:**
  ```js
  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from './authSlice';

  export const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', // Disable Redux DevTools in production
  });
  ```

- **Restrict direct state modification** by not exposing Redux actions globally.

## License
This project is for educational purposes.
