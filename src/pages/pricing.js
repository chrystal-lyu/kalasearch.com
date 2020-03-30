import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Pricing = () => (
  <Layout>
    <SEO title="Pricing" />
    <h1>Hi from Pricing page</h1>
    <p>Welcome to Pricing Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Pricing;
