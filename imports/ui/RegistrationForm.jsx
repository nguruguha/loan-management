// imports/ui/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newUser = {
        email: email,
        password: password,
        profile: { role: role }
      };
      Accounts.createUser(newUser, (error) => {
        if (error) {
          console.error('Registration failed:', error.reason);
        } else {
          console.log('Registration successful!');
          // Redirect or perform any other action upon successful registration
        }
      });
    };

  const handleLoginClick = () => {
    window.location.href = '/Login';
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <label htmlFor="role">Role:</label>
        <select id="role" value={role} onChange={handleRoleChange} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="borrower">Borrower</option>
          <option value="lender">Lender</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <div>
        Already have an account? <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
