import React from "react"
import FooterStyl from "../styles/footer.module.styl"

const Footer = () => (
  <footer className={FooterStyl.footer}>
    <div className={FooterStyl.container}>
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
