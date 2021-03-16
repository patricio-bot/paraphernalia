import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dog from '../assets/dog-error.jpg'
const ErrorPage = () => {
  const top = () => {
    window.scrollTo(0, 0)
  }
  return <Wrapper className="page-100">
    <section>
      <img src={dog} alt="dog drawing" />
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link onClick={top} to='/' className='btn' >back home</Link>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  img{
    width:80%;
  }
  @media screen and (min-width:900px){
    img{
      width:50%;
    }
  }
`

export default ErrorPage
