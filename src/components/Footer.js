import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>&copy; {new Date().getFullYear()}
      <span>paraphernalia</span>
    </h5>

    <h5>All rights reserved</h5>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
 
  h5 span {
    color: var(--grey-11);
    font-family:'Kaushan Script', cursive;
    font-size:1.6rem;
    padding:0 1rem;
  }
  h5 {
    color: var(--clr-white);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    font-size:1.2rem;
  }
  @media (min-width: 776px) {
    flex-direction: row;
    h5{
      margin: .5rem;
    }
  }
`

export default Footer
