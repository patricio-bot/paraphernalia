import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck, FaTimes } from 'react-icons/fa'


const Filters = () => {
  const {
    filters: {
      text, category, company, color, min_price, max_price, price, shipping
    },
    updateFilters, clearFilters, all_products, isFilterModalOpen, closeFilterModal
  } = useFilterContext()

  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className={`${isFilterModalOpen ? 'content show-modal' : 'content'}
      ${scrolled ? 'content position' : 'content'}
      `}>
        <div className={`${isFilterModalOpen ? 'form-container show-form' : 'form-container'}`}>
          <button className='close-modal-btn' onClick={closeFilterModal} >
            <FaTimes />
          </button>

          <form onSubmit={(e) => e.preventDefault()}>
            {/*search input*/}

            <div className="form-control">
              <input type="text" name="text" placeholder='search' className='search-input' value={text} onChange={updateFilters} />
            </div>

            {/*categories*/}
            <div className="form-control">
              <h5>category</h5>
              <div>

                {React.Children.toArray(
                  categories.map((cat) => {
                    return <button
                      onClick={updateFilters}
                      name='category'
                      type='button'
                      className={`${category === cat.toLowerCase() ? 'active' : null}`}
                    >
                      {cat}
                    </button>
                  })
                )
                }
              </div>
            </div>
            {/*companies*/}
            <div className="form-control">
              <h5>company</h5>
              <select name="company" id="company" value={company} onChange={updateFilters} className='company'
              >
                {React.Children.toArray(
                  companies.map((co) => {
                    return <option value={co}>{co}</option>
                  })
                )}

              </select>
            </div>
            {/*colors*/}
            <div className="form-control">
              <h5>colors</h5>
              <div className="colors">
                {React.Children.toArray(
                  colors.map((col) => {
                    if (col === 'all') {
                      return <button name='color'
                        style={{ background: col }}
                        className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`} data-color='all'
                        onClick={updateFilters}>all</button>
                    }
                    return <button
                      name='color'
                      style={{ background: col }}
                      className={`${color === col ? 'color-btn active' : 'color-btn'}`} data-color={col}
                      onClick={updateFilters}
                    >
                      {color === col ? <FaCheck /> : null}
                    </button>
                  })
                )}
              </div>
            </div>
            {/*price*/}
            <div className="form-control">
              <h5>price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input
                type="range"
                name="price"
                id="price"
                onChange={updateFilters}
                min={min_price}
                max={max_price}
                value={price} />
            </div>
            {/*shipping*/}
            <div className="form-control shipping">
              <label htmlFor="shipping">free shipping</label>
              <input type="checkbox" name="shipping" id="shipping" onChange={updateFilters} checked={shipping} />
            </div>
          </form>
          <button className="clear-btn" onClick={clearFilters} >clear filters</button>
        </div>


      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.content {
 display:flex;
 justify-content:center;
 align-items:center;
  position:fixed;
  top:0;
  left:0;
   z-index:-1;
  visibility:hidden;
  background-color:rgba(0,0,0,0.5);
  width:100%;
  height:100%;
 transition:var(--transition);
 overflow:scroll;
}
.show-modal{
  visibility:visible;
  z-index:10;
}
.form-container{
  background:#fff;
  width:90vw;
  height:auto;
  max-width:var(--fixed-width);
  border-radius:var(--radius);
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  transform:translateY(-500%);
  transition:var(--transition);
  padding-bottom:2rem;
}
.show-form{
  transform:translateY(0);
}
form{
  display:grid;
  grid-template-columns:repeat(2,1fr);
 margin:3rem 0;
 
}
.close-modal-btn{
  position:absolute;
  top:1rem;
  right:1rem;
}


  .form-control {
    margin-bottom: 1.25rem;
    margin-left:1rem;
   width:100%;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    outline:none;
  }
  .active, button:focus {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1.4rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    position:absolute;
    bottom:1rem;
  }
  @media (max-width:320px){
  form{
    width:100%;
  }
}
@media (min-width: 768px) {
  .content {
    display: initial;
    top:initial;
    left:initial;
    transform:none;
    position:initial;
    background:none;
    width:initial;
    height:initial;
    visibility:visible;
    overflow:initial;
    z-index:99999;
  }
  .close-modal-btn{
  display:none;
}
  .position{
    position: fixed;
    top: 10rem;
  }
  form{
    display:initial;
    width:100%;
    margin:initial;
    padding:initial;
    top:initial;
    left:initial;
    transform:none;
    background:none;
 
  }
  .form-container{
    display:initial;
    position:initial;
  }
  .form-control{
    margin-left:initial;
  }
  .clear-btn{
    position:initial;
    bottom:initial;
  }
}
 
`

export default Filters
