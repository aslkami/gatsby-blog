// import { graphql } from "gatsby"
// import React from "react"
// import SEO from "../components/Seo"
// import Layout from "./../components/Layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const BlogTemplate = props => {
//   const { frontmatter, html } = props.data.markdownRemark
//   return (
//     <Layout>
//       <SEO title={frontmatter.title}></SEO>
//       <h1>{frontmatter.title}</h1>
//       <p>{frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: html }}></div>
//     </Layout>
//   )
// }

// export default BlogTemplate
