import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      {/*   <div className="wrapper">
        <div className="main">
         
        </div>
      </div> */}
      <Wrapper className='page' >
        <h1>checkout here</h1>
      </Wrapper>

    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
