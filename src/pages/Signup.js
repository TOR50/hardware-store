import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Redirect to the login page after form submission
    navigate('/login');
  };

  return (
    <ContainerDiv>
      <FormDiv>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
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
          <Button type="submit">Signup</Button>
        </form>
        {/* {error && <p>{error}</p>} */}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </FormDiv>
    </ContainerDiv>
  );
};

export default Signup;