import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = (props) => {
  let pageTitle = props.title
  let children = props.children
  return (
    <div className={container}>
      <Helmet title={pageTitle} defer={false} />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
      <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout