import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { Loading, PageHero, Product } from '../components'


const CategoryPage = () => {
  const { text } = useParams()

  const { products, single_product_loading: loading, closeSubmenu } = useProductsContext()
  const filter = products.filter((product) => product.category === text)
  const sorted = filter.sort((a, b) => a.name.localeCompare(b.name))

  const length = filter.length
  if (loading) {
    return <Loading />
  }

  return (
    <div className='main-section' onMouseOver={closeSubmenu}>
      <PageHero brand={text} title='category' />
      <Wrapper>
        <section className='section section-center'>
          <h3>In <span>paraphernalia</span> we have everything for your {text}</h3>
          <p>I'm baby cray {text} vape taxidermy, mustache anim chartreuse franzen slow-carb in proident magna veniam chambray authentic. Commodo helvetica fugiat craft beer, selfies mumblecore hammock lo-fi heirloom artisan literally. Vegan dreamcatcher est, glossier bitters nostrud activated charcoal austin irure taiyaki food truck sustainable locavore post-ironic. Drinking vinegar commodo pork belly, next level semiotics VHS tofu eu literally occupy. Fugiat intelligentsia blog velit ad qui. Butcher air plant bicycle rights try-hard poutine cold-pressed mollit fingerstache bushwick poke vape.</p>

          <div className='category-products'>
            <p>{length} products found in category: {text}</p>
            <hr />
          </div>
          <div className="products-container">
            {sorted.map((product) => {
              return <Product key={product.id} {...product} />
            })}
          </div>

        </section>
      </Wrapper>




    </div>
  )
}


const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  h3{
      text-transform:none;
      font-size:1.4rem;
  }
  h3 span{
    color: var(--grey-11);
    font-family:'Kaushan Script', cursive;
    font-size: 1.6rem;
  }
.category-products{
  display: grid;
  grid-template-columns: auto 1fr ;
  align-items: center;
  margin: 2rem 0;
  column-gap: 2rem;
  & p{
    
    text-transform: capitalize;
    margin-bottom: 0;
    font-size:1.4rem;
 
  }
}
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  `
export default CategoryPage