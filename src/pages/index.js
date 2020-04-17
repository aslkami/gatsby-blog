import React from "react"
import Image from "../components/Image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

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
