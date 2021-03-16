import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {

  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt={main.filename} className='main' />
      <div className="gallery">
        {images.map((img, index) => {
          return <img
            src={img.url}
            alt={img.filename}
            key={index}
            onClick={() => setMain(images[index])}
            className={`${img.url === main.url ? 'active' : null}`} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      opacity:0.8;
      filter:blur(0.8px);
    }
    .active {
    border: 2px solid var(--clr-primary-5);
    opacity:1;
    filter:blur(0);
  }
  }
 
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
