// src/Login.js
import React, { useState } from 'react';
import { useStore } from '../store/store.reducer';
import { login } from '../services/login.service';
import styles from '../css/Login.module.css';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_REQUEST' });
 
    try {
      const user = await login(email, password);
      console.log(user)
      if(user.role == 'NURSE'){
        navigate('/nurse-dashboard')
      }
      else if(user.role == 'ADMIN'){
        navigate('/admin-dashboard')
      }
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  return (
    <div className={styles.bookContainer}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button} disabled={state.loading}>
            {state.loading ? 'Logging in...' : 'Login'}
          </button>
          {state.error && <p className={styles.error}>{state.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
