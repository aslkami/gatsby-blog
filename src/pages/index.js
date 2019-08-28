import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>fate</h1>
      <h4>total: {data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title} --- {node.frontmatter.date}
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            description
            title
            date
          }
          excerpt
          id
          fields {
            slug
          }
        }
      }
    }
  }
`
