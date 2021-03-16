import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import { subLinks } from '../utils/constants'
import CartButtons from './CartButtons'



const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { user, isAuthenticated } = useUserContext()

  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)


  const toggleDropdown = () => setIsActive(!isActive)


  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }
    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])




  const top = () => {
    window.scrollTo(0, 0)
  }

  const isUser = isAuthenticated && user

  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar '}`}>
      <div className="sidebar-header">

      </div>
      <div className="sidebar-content">

        <ul className='links'>
          <li onClick={top}>
            <Link to='/' onClick={closeSidebar} >Home</Link>
          </li>
          <li onClick={top}>
            <Link to='/about' onClick={closeSidebar}>About</Link>
          </li>
          <li className='sublinks' onClick={toggleDropdown} >
            products
        </li>
          <ul ref={dropdownRef} className={` ${isActive ? 'menu active' : 'menu'}`}>
            {subLinks.map((oneLink) => {
              const { id, url, text, icon } = oneLink

              return <li key={id} onClick={top}>
                <Link
                  onClick={closeSidebar}
                  className='submenus'
                  to={text !== 'all' ? `/category/${text}` : url}>{icon}{text}
                </Link>

              </li>
            })}
          </ul>
          {isUser && <li>
            <Link to='/checkout' onClick={closeSidebar}>checkout</Link>
          </li>}

        </ul>

      </div>

      <div className="sidebar-footer">
        <CartButtons />
      </div>
    </div>
  )

}



export default Sidebar
