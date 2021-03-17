import React from 'react'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'
import { CartContent, PageHero, CartIsEmpty } from '../components'

const CartPage = () => {
  const { closeSubmenu } = useProductsContext()
  const { cart } = useCartContext()

  return (
    <div onMouseOver={closeSubmenu}>
      <PageHero title='cart' />
      {cart.length < 1 ? <CartIsEmpty /> : <main className='page'>
        <CartContent />
      </main>}

    </div>
  )
}


export default CartPage
