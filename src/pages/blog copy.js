// import { Link, useStaticQuery } from "gatsby"
// import React from "react"
// import Layout from "../components/Layout"
// import SEO from "../components/Seo"

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             excerpt
//             frontmatter {
//               title
//               date(formatString: "MMMM DD, YYYY")
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <SEO title="FateBlog" />
//       <ol>
//         {data.allMarkdownRemark.edges.map(({ node }) => {
//           return (
//             <li>
//               <Link to={`/blog${node.fields.slug}`}>
//                 <h2>{node.frontmatter.title}</h2>
//                 <p>{node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogPage
