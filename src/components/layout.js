import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import NavbarComponent from "./navbar"

const Layout = ({ location, title, children }) => {

  return (
    <>
      <NavbarComponent/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
