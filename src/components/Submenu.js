import React, { useRef, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { subLinks } from '../utils/constants'

const Submenu = () => {
    const { isSubmenuOpen, closeSubmenu, location } = useProductsContext()

    const container = useRef(null)

    useEffect(() => {
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    })

    return (
        <Fragment>
            <aside className={`${isSubmenuOpen ? 'submenu show-submenu link-btn' : 'submenu'}`} ref={container}>
                <div className="submenu-center link-btn">
                    {subLinks.map((link) => {
                        const { id, icon, text, url } = link
                        return (
                            <Link onClick={closeSubmenu} to={text !== 'all' ? `/category/${text}` : url} key={id}>{icon}{text}</Link>
                        )
                    })}
                </div>

            </aside>
        </Fragment>
    )
}
export default Submenu