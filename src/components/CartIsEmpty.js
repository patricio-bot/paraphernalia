import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartIsEmpty = () => {
    return (
        <Wrapper className='page-100'>
            <div className="empty">
                <h2>It seems you are in need of <span>paraphernalia</span> </h2>
                <Link to='/products' className='btn'>fill it</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      & span{
        color: var(--grey-11);
    font-family:'Kaushan Script', cursive;
      }
      
    }
  }
`
export default CartIsEmpty