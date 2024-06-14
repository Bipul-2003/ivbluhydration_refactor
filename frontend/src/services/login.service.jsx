// src/api.js
import baseUrl from '../data/baseUrl';
export const login = async (username, password) => {
    // Replace with your actual API endpoint
    const response = await fetch(baseUrl.baseUrl+"/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
  