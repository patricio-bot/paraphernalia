import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Error from './Error'
import Loading from './Loading'



const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: featured, closeSubmenu } = useProductsContext()

  const [index, setIndex] = useState(0)



  useEffect(() => {
    const lastIndex = featured.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, featured])
  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(autoSlide)
    }
  }, [index])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <Wrapper className='section' onMouseOver={closeSubmenu}>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <section className="section-center featured">
        {featured.map((product, productIndex) => {

          const { name, price, image, id, category } = product
          let position = 'nextSlide'
          if (productIndex === index) position = 'activeSlide'
          if (productIndex === index - 1 || (index === 0 && productIndex === featured.length - 1)) {
            position = 'lastSlide'
          }

          return (

            <article key={id} className={position}>
              <div className="container">
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className='link'>
                  <FaSearch />
                </Link>

                <button className="prev" onClick={() => setIndex(index - 1)} >
                  <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                  <FiChevronRight />
                </button>
                <div className="info">
                  <h4>{name}</h4>
                  <p>{formatPrice(price)}</p>
                  <p>{category}</p>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding:2rem;
  margin-top:4rem;
  

  .featured {
    margin: 4rem auto 2rem;
   ${'' /*  display: grid;
    gap: 2.5rem; */}
    display:flex;
    align-content:center;
    overflow:hidden;
    width:100%;
    height:300px;
    position:relative;
    text-align:center;
    img {
      ${'' /* height: 225px; */}
      display: block;
      object-fit: cover;
      height:225px;
      width:100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      opacity:0;
      transition: var(--transition);
      
    }
    article.activeSlide {
    opacity: 1;
    transform: translateX(0);
    }
    article.lastSlide {
    transform: translateX(-100%);
    }
    article.nextSlide {
    transform: translateX(100%);
    }

  }
  .container {
    position: relative;
    background: var(  --clr-black);
    border-radius: var(--radius);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .info{
  position:absolute;
  bottom:0;
  width:100%;
  padding:.6rem;
  display:flex;
  justify-content:space-between;
  align-items:center; 
  font-size:1.4rem;
  background:var(--transparent);
  p{
    font-size:1.2rem;
    text-transform:capitalize;
  }
  h4{
    font-size:1.6rem;
  }
    p, h4{
      color:var(--clr-grey-9);
      letter-spacing: var(--spacing);
      margin-bottom: 0;
    font-weight: 400;
    }
  }
  .mr-1{
    margin-right:1rem;
  }
  .title{
    margin-top:2rem;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .prev,
  .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 2rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  outline:none;
  }
  .prev:hover,
  .next:hover {
  background: var(--clr-primary-11);
  }
  .prev {
  left: 1rem;
  }
  .next {
  right: 1rem;
  }
  @media (min-width: 600px) {
   ${'' /*  .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    } */}
    .featured{
      height:400px;
      img{
      height:400px;
      }
    }
    margin-top:30rem;
  }
  @media (min-width: 768px) {
    margin-top:10rem;
    .info{
      padding:1rem;
    }
    .link{
      width: 4rem;
    height: 4rem;
      svg {
      font-size: 2rem;
      color: var(--clr-white);
      }
    }
  }
  @media (min-width: 900px) {
    margin-top:20rem;
    .featured{
      height:500px;
      img{
      height:500px;
      }
    } 
   
    .prev,.next{
      width:4rem;
      height:4rem;
      font-size:3rem;
    }
    .info{
      padding:2rem;
      
      p{
        font-size:1.6rem;
      }
    }
   
  }
 
`

export default FeaturedProducts
