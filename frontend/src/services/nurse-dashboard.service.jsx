// src/api.js
import baseUrl from '../data/baseUrl';
export const getPendingAppointmentsByNurse = async (userId) => {
    // Replace with your actual API endpoint
    const response = await fetch(baseUrl.baseUrl+"/appointment/pendingsByNurse", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
  
  export const getAllAppointmentsByNurse = async (userId) => {
    // Replace with your actual API endpoint
    const response = await fetch(baseUrl.baseUrl+"/appointment/confirmedByNurse", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
  