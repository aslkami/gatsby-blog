import { graphql } from "gatsby"
import React from "react"
import Layout from "./../components/layout"

export default ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
