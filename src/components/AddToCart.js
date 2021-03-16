import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product

  const [mainColor, setMainColor] = useState(colors[0])

  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tmpAmount = oldAmount + 1
      if (tmpAmount > stock) {
        tmpAmount = stock
      }
      return tmpAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tmpAmount = oldAmount - 1
      if (tmpAmount < 1) {
        tmpAmount = 1
      }
      return tmpAmount
    })
  }

  return (
    <Wrapper>
      <div className="colors">
        <span>colors:</span>
        <div>
          {React.Children.toArray(
            colors.map((color) => {
              return <button
                className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                style={{ background: color }}
                onClick={() => setMainColor(color)} >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            })
          )

          }
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to='/cart' className='btn' onClick={() => addToCart(id, mainColor, amount, product)} >add to cart</Link>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
          text - transform: capitalize;
      font-weight: 700;
      font-size:1.2rem;
    }
    div {
          display: flex;
    }
  }
  .color-btn {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    outline:none;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active, .color-btn:focus {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
    text-align:center;
  }
  .isDisabled{
    background: var(--disabled);
    cursor:not-allowed;
    margin-top: 1rem;
    width: 140px;
    text-align:center;
  }
  .isDisabled:hover{
    color:var(--clr-primary-10);
  }
`
export default AddToCart
