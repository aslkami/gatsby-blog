import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Layout from "./../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulFateBlog(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  const { title, publishedDate, body } = props.data.contentfulFateBlog
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const data = node.data.target.fields
        const alt = data.title["en-US"]
        const url = data.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <SEO title={title}></SEO>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default BlogTemplate
