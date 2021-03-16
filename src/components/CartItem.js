import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash, FaSearch } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, 'inc')
  }

  const decrease = () => {
    toggleAmount(id, 'dec')
  }

  return (
    <Wrapper>
      <div className="title-item">
        <div className="img-container">
          <img src={image} alt={name} />
          <Link to={`/products/${id}`} className='link'>
            <FaSearch />
          </Link>

        </div>


        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ background: color }}> </span>
          </p>
          <h5 className="price-small">
            {formatPrice(price)}
          </h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} className='amount-btns' />
      <h5 className='subtotal'>
        {formatPrice(price * amount)}
      </h5>
      <button className="remove-btn" onClick={() => removeItem(id)}><FaTrash /></button>

    </Wrapper>
  )
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
 display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;


  .title-item {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  
  }
  .img-container{
    position:relative;
    overflow:hidden;
    height: 80%;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .img-container:hover img {
    opacity: 0.5;
  }
  .img-container:hover .link {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  
  }
  .amount-btns {
    width: 75px;
   
    
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
    margin-left:1rem;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1.6rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.6rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 1.2rem;
    }
    .color {
      font-size:1.2rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title-item {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 2rem;
        height: 1rem;
        font-size: 1.6rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
    .remove-btn{
      margin-left:initial;
    }
  }
`

export default CartItem
