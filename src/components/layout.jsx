import * as React from 'react'
import { Helmet } from 'react-helmet'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let pageTitle = props.title
  let children = props.children
  return (
    <div className={container}>
      <Helmet title={pageTitle + " - " + data.site.siteMetadata.title} defer={false} />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
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