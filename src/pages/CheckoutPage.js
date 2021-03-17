import React from 'react'
import { PageHero, StripeCheckout, CartIsEmpty } from '../components'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'


const CheckoutPage = () => {
  const { cart } = useCartContext()
  const { closeSubmenu } = useProductsContext()
  return (
    <main onMouseOver={closeSubmenu} >
      <PageHero title='checkout' />

      {cart.length < 1 ? <CartIsEmpty /> : <StripeCheckout />}

    </main>
  )
}

export default CheckoutPage
