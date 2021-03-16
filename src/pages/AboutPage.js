import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-tools.jpg'

const AboutPage = () => {
  const { closeSubmenu } = useProductsContext()
  return (
    <main className='main-section' onMouseOver={closeSubmenu}>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="desktop" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>I'm baby keytar adaptogen pok pok, hoodie bicycle rights meggings brooklyn. Affogato pickled +1 kale chips wolf chicharrones disrupt vegan marfa cred semiotics. Raw denim umami la croix, gastropub asymmetrical affogato forage pop-up you probably haven't heard of them kinfolk keffiyeh viral intelligentsia. Crucifix offal tote bag kickstarter iPhone hashtag farm-to-table enamel pin gentrify beard chartreuse before they sold out YOLO church-key.
            Vinyl sriracha man bun gluten-free, portland chartreuse twee thundercats keffiyeh poke aesthetic. Artisan everyday carry poutine chillwave, 90's pork belly freegan wayfarers YOLO hexagon shaman. Keffiyeh leggings sartorial hell of. PBR&B scenester biodiesel, heirloom XOXO wolf brooklyn put a bird on it narwhal street art echo park selvage lomo chillwave.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;


  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2; 
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
