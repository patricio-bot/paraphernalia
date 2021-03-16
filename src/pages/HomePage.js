import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import styled from 'styled-components'

const HomePage = () => {

  return (
    <Wrapper>

      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />


    </Wrapper>
  )
}
const Wrapper = styled.main`

@media screen and (min-width:600px){
  padding:5rem 0;
}
@media screen and (min-width:768px){
  padding:0;
}

`


export default HomePage
