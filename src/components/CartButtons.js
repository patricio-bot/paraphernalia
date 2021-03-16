import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, logout, user, isAuthenticated } = useUserContext()

  const isUser = isAuthenticated && user


  return <Wrapper className="cart-btn-wrapper">
    {isUser && user.name && <img src={user.picture} alt={user.name} />}

    <Link to='/cart' className='cart-btn' onClick={closeSidebar}>

      <span className="cart-container">
        <FaShoppingCart />
        <span className={`${total_items === 0 ? 'inactive' : 'cart-value'}`}>
          {total_items}
        </span>
      </span>
    </Link>

    {isUser ? (
      <button className="auth-btn" onClick={() => {
        clearCart()
        localStorage.removeItem('user')
        logout({
          returnTo: window.location.origin
        })
      }
      }>
        <FiLogOut />
      </button>
    ) : (<button className="auth-btn" onClick={loginWithRedirect}>
      <FiLogIn />
    </button>)}


  </Wrapper>
}

const Wrapper = styled.div`
${'' /*   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 225px;
  gap:2rem; */}
  display:flex;
  justify-content:center;
  align-items:center;
  width:225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.8rem;
    letter-spacing: var(--spacing);
    color: var(--grey-11);
    display: flex;
    align-items: center;
    margin:0 2rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -15px;
    right: -16px;
    background: var(--clr-primary-11);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .inactive{
    opacity:0;
  }
  .auth-btn {
    ${'' /* justify-self:center; */}
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 2.4rem;
    cursor: pointer;
    color: var(--grey-11);
    letter-spacing: var(--spacing);
   
  }
  img{
    height:35px;
    object-fit:cover;
    ${'' /* justify-self:center; */}
    border-radius:50%;
    
  }
 
`
export default CartButtons
