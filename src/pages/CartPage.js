import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const { closeSubmenu } = useProductsContext()
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return <Wrapper className='page-100'>
      <div className="empty">
        <h2>It seems you are in need of <span>paraphernalia</span> </h2>
        <Link to='/products' className='btn'>fill it</Link>
      </div>
    </Wrapper>
  }
  return (
    <>
      <PageHero title='cart' onMouseOver={closeSubmenu} />
      <Wrapper className='page' onMouseOver={closeSubmenu}>
        <CartContent />
      </Wrapper>
    </>
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

export default CartPage
