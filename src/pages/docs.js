import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Docs = () => (
  <Layout>
    <SEO title="Documentation" />
    <h1>Hi from Docs page</h1>
    <p>Welcome to Docs Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Docs;
