import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-para.svg'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu } = useProductsContext()
  const { user, isAuthenticated } = useUserContext()



  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 100) {
      setScrolled(true)

    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  const displaySubmenu = (e) => {

    //get current menu button
    const page = 'products'

    //get position of each menu
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom + 8
    openSubmenu(page, { center, bottom })
  }
  //close submenu 
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  const isUser = isAuthenticated && user

  return <NavContainer onMouseOver={handleSubmenu}  >
    <div className={scrolled ? 'nav-center scrolled' : 'nav-center'}>
      <div className="nav-header">
        <Link to='/'>
          <img src={logo} alt="paraphernalia logo" />

        </Link>
        <div className="nav-button" onClick={isSidebarOpen ? closeSidebar : openSidebar}>
          <div className={isSidebarOpen ? "burger lines close" : "burger lines"}>
            <div className="line top"></div>
            <div className="line middle"></div>
            <div className="line bottom"></div>
          </div>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link className='link-btn' to='/products' onMouseOver={displaySubmenu}>products</Link>
        </li>
        {isUser && <li>
          <Link to='/checkout'>checkout</Link>
        </li>}

      </ul>
      <CartButtons />
    </div>

  </NavContainer>
}

const NavContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  padding:5rem 0;


  .nav-center {
    width: 100%;
    margin: 0 auto;
    display:flex;
    justify-content:space-around;
    position:fixed;
    top:0;
    z-index: 99999;
    background:var(--clr-white);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    img {
      height:80px;
      padding:0.5rem 2rem;
    }
  }
  .nav-button {
    color: var(--grey-11);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    cursor: pointer;
    padding:2rem;
  
  }
  .burger {
  width: 3rem;
  position: relative;
  cursor: pointer;
}

.line {
  background:var(--grey-11);
  width: 80%;
  height: 2px;
  position: absolute;
  transition: all 0.4s cubic-bezier(0.26, 0.1, 0.27, 1.55);
}

.top {
  top: -10px;
  width:40%
}

.bottom {
  top: 10px;
  width:100%;
}

.lines.close .top {
  top: 0px;
  width:100%;
  transform: rotate(45deg);
  background-color: var(--grey-11);
}
.lines.close .middle{
  opacity:0;
}
.lines.close .middle,
.lines.close .bottom {
  top: 0;
  width:100%;
  transform: rotate(-45deg);
  background-color: var(--grey-11);
}
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
 
  @media (min-width: 900px) {
    .nav-button {
      display: none;
    }
    .nav-header{
      width:initial;
    }
    .nav-center {
    display:flex;
      justify-content:space-between;
      align-items:center;
    }
  
    .nav-links {
      display: flex;
      justify-content:center;
      li {
        margin: 0 1rem;
       
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        font-size:1.8rem;
        position:relative;
       
        &::after{
        position:absolute;
        content:'';
        width:100%;
        height:0px;
        background-color:var(--grey-11);
        top:100%;
        left:0;
        transform:translateY(-25px);
        opacity: 0;
  -webkit-transition: height 0.3s, opacity 0.3s, transform 0.3s;
  transition: height 0.3s, opacity 0.3s, transform 0.3s;
      }
      &:hover::after{
        transform:translateY(0px);
        height:2px;
        opacity:1;
      }
      }
     
    }
    .cart-btn-wrapper {
      display: flex;
    }
  }
`

export default Nav
