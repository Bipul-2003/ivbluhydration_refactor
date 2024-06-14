// src/store.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'PENDING_APPOINTMENTS_BY_NURSE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'PENDING_APPOINTMENTS_BY_NURSE_SUCCESS':
      return { ...state, loading: false, appointments: action.payload };
    case 'PENDING_APPOINTMENTS_BY_NURSE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create context
const StoreContext = createContext();

// Context provider component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the store
export const useStore = () => useContext(StoreContext);
