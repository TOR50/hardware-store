import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30rem;
  z-index: 100;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  padding: 5rem;
  background-color: var(--dark-blue);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: var(--blue);
  }
`;

const LoginSignupForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login/signup logic here
    console.log(email, password);
    onClose(); // Close the form upon submission for simplicity
  };

  return (
    <FormContainer>
      <h1>Login/Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit"> Submit   Details</Button>
      </Form>
      <Button onClick={onClose}>Close</Button>
    </FormContainer>
  );
};

export default LoginSignupForm;