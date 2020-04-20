import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyl from "../styles/header.module.styl"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={HeaderStyl.header}>
      <div className={HeaderStyl.container}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
            }}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <ul className={HeaderStyl.category}>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/blog">文章</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
