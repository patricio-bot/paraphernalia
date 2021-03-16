import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
  const { openFilterModal, clearFilters, filters: { category, company } } = useFilterContext()
  const { closeSubmenu } = useProductsContext()
  return (
    <main className='main-section' onMouseOver={closeSubmenu}>
      <PageHero title={category !== 'all' ? category : null} product brand={company !== 'all' ? company : null} />
      <Wrapper className='page'>
        <div className="section-center products">
          <button className='btn btn-filters' onClick={openFilterModal} >filters</button>
          <button className='clear-filter-btn' onClick={clearFilters}>clear filters</button>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`

  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .clear-filter-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.8rem;
    border-radius: var(--radius);
    display: block;
    text-transform: capitalize;
    border: none;
    letter-spacing: var(--spacing);
    cursor: pointer;
    outline:none;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
    .btn-filters, .clear-filter-btn {
      display:none;
    }
  }
`

export default ProductsPage
