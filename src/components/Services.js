import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { services } from '../utils/constants'
import Fade from 'react-reveal/Fade'

const Services = () => {
  const { closeSubmenu } = useProductsContext()
  return (
    <Fade right>
      <Wrapper onMouseOver={closeSubmenu}>

        <div className="section-center">
          <article className="header">
            <h3>custom furniture<br /> built only for you</h3>
            <p>I'm baby ethical keffiyeh flannel la croix four loko. Knausgaard bespoke freegan, chicharrones put a bird on it XOXO farm-to-table fanny pack. +1 poutine ugh meditation fam banh mi waistcoat sustainable trust fund YOLO tbh readymade.</p>
          </article>
          <Fade bottom cascade delay={300}>
            <div className="services-center">
              {services.map((service) => {
                const { id, icon, title, text } = service
                return <article key={id} className="service">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              })}
            </div>
          </Fade>
        </div>

      </Wrapper>
    </Fade>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    font-size:1.2rem;
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    border:1px solid var(--clr-primary-7);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(2, 1fr);
    }
    p{
      font-size:1.25rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items:center;
    }
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
    .services-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
 
 
  }
`
export default Services
