import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../assets/cart.svg';
import CartContext from '../store/cart-context';
import Cart from './Cart/Cart';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  & button {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
    padding: 1rem 3rem;
  }
  & img {
    width: 2rem;
  }
`;

const NavH = styled.h1`
  font-size: 2rem;
  font-family: 'PT Sans Narrow', sans-serif;
  display: flex;
  align-items: baseline;

  & a {
    color: var(--dark-grey);
  }
`;

const Square = styled.div`
  background-color: var(--orange);
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.2rem;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 1rem 3rem;
  margin-left: 1rem;
  background-color: var(--dark-blue);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--blue);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem; /* Add space between buttons */
`;

const Navegation = () => {
  const cartCtx = useContext(CartContext);

  const toggleHandler = () => cartCtx.cartDispatch({ type: 'TOGGLE_CART' });

  return (
    <NavDiv>
      {cartCtx.cartState.showModal && <Cart />}

      <NavH>
        <Link to={'/'}>Hardware Store</Link>
        <Square />
      </NavH>
      <ButtonContainer>
        <button onClick={toggleHandler}>
          Your Cart
          <img src={cart} alt="shopping cart icon" />
        </button>
        <StyledButton to="/">Home</StyledButton>
      </ButtonContainer>
    </NavDiv>
  );
};

export default Navegation;