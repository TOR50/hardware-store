import styled from 'styled-components';
import { useState } from 'react';

const ContainerDiv = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 102.4rem;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: 0.1rem solid var(--light-grey);
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 1rem 3rem;
  background-color: var(--dark-blue);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--blue);
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to the home page after form submission
    window.location.href = '/';
  };

  return (
    <ContainerDiv>
      <FormDiv>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <Button type="submit">Login</Button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </FormDiv>
    </ContainerDiv>
  );
};

export default Login;