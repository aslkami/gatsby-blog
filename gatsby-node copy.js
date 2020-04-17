/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// You can delete this file if you're not using it
// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   // pull in or use whatever data
//   const dogData = [
//     {
//       name: "Fido",
//       breed: "Sheltie",
//     },
//     {
//       name: "Sparky",
//       breed: "Corgi",
//     },
//   ]

//   dogData.forEach(dog => {
//     createPage({
//       path: `/${dog.name}`,
//       component: require.resolve(`./src/templates/dog-template.js`),
//       context: { dog },
//     })
//   })
// }

// graphql 添加数据源
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const pokemons = [
    { name: "Pikachu", type: "electric" },
    { name: "Squirtle", type: "water" },
  ]

  pokemons.forEach(pokemon => {
    const node = {
      name: pokemon.name,
      type: pokemon.type,
      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: "Pokemon",
        contentDigest: createContentDigest(pokemon),
      },
    }
    actions.createNode(node)
  })
}

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     console.error(result.errors)
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: path.resolve(`src/templates/post.js`),
//     })
//   })
// }

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // console.log(JSON.stringify(node, null, 4))

    const slug = createFilePath({ node, getNode, basePath: `pages` }) //  /fate/
    const slug2 = path.basename(node.fileAbsolutePath, ".md") // fate

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// 创建页面
//
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog-template.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
