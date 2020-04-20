import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Fate" />
    <h2>尊敬的访客</h2>
    <p>欢迎来到安了个装个人博客！</p>
    <div style={{ maxWidth: 280, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
