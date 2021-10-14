import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout title="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={'/blog/' + node.slug}><h2>{node.frontmatter.title}</h2></Link>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}
export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
}
`
export default BlogPage