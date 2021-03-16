import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-room.jpg'
import heroBcg2 from '../assets/hero-man.jpg'
import heroTools from '../assets/hero-tools-2.jpg'
import heroKids from '../assets/collov-home.jpg'
import Fade from 'react-reveal/Fade'
import 'animate.css'
import { useProductsContext } from '../context/products_context'

const Hero = () => {

  const { closeSubmenu } = useProductsContext()

  return <Wrapper className='section-center' onMouseOver={closeSubmenu} >
    <Fade duration={2000} delay={2000}>
      <article className="content">
        <h1>
          stylish <br />
        paraphernalia for you
      </h1>
        <p>Tote bag sartorial flannel, shabby chic air plant lomo YOLO pinterest drinking vinegar. Yr shoreditch viral pickled. Stumptown XOXO authentic before they sold out coloring book 90's hammock chartreuse, chillwave tacos locavore scenester. Try-hard biodiesel small batch franzen salvia.</p>
        <Link to='/products' className='btn hero-btn'>shop now</Link>
      </article>
    </Fade>
    <Fade left duration={1000}>
      <img src={heroKids} alt="kids house" className='main-img-2' />
    </Fade>
    <article className="img-container">
      <Fade right duration={2000}>
        <img src={heroBcg} alt="table" className='main-img' />
      </Fade>


      <Fade right delay={3000}>
        <img src={heroBcg2} alt="carpenter" className='accent-img' />
      </Fade>
      <Fade right delay={1800}>
        <img src={heroTools} alt="carpenter tools" className='back-img' />
      </Fade>

    </article>

  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding:4rem 0;
  position:relative;
  .img-container, .main-img-2 {
    display: none;
  }
  .content{
    position:absolute;
    background:var(--clr-white);
    padding:2rem;
  }

  p {
    line-height: 2;
    max-width: 40rem;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
   ${'' /* height: calc(100vh - 4rem); */}
    grid-template-columns: 1fr 1fr;
    margin:8rem auto;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: absolute;
      width:40%;
      right:0;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      z-index:-2;
      outline: 1px solid var(--clr-primary-9);
      outline-offset:-5px;
      padding:.8rem;
      background:var(--clr-white);
    }
    .main-img-2{
      position:absolute;
      width:80%;
      height:550px;
      z-index:-2;
      border-radius: var(--radius);
      display: none;
      object-fit: cover;
      outline: 1px solid var(--clr-primary-9);
      outline-offset:-5px;
      padding:.8rem;
      background:var(--clr-white);
    }
    .accent-img {
      position: absolute;
      bottom: -2%;
      left: -33%;
     padding:.8rem;
      width: 250px;
      outline: 1px solid var(--clr-primary-9);
      outline-offset:-5px;
      transform: translateX(-50%);
  background:#fff;
      border-radius: var(--radius);
    }
    .back-img {
      position: absolute;
      bottom: -10%;
      left: -5%;
      z-index:-1;
      width: 250px;
      padding:.8rem;
      outline: 1px solid var(--clr-primary-9);
      outline-offset:-5px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      background:#fff;

    }
    .content{
      outline: 1px solid var(--clr-primary-9);
      outline-offset:-5px;
      left:5%;
    }

   
  }
  @media screen and (min-width:768px){
    margin:2rem auto;
    padding:0;
  
    .main-img-2{
      left:0;
    top:12px;
    display:block;
    }
  }
  @media (min-width:900px){
    margin:8rem auto;
    .content{
      left:20%;
    }
  }
  @media (min-width:1200px){
    .content{
      left:25%;
    }
  }

`

export default Hero
