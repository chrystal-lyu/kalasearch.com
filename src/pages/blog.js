import React from "react"
import styled from 'styled-components';
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        {
          edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <h1 key = {frontmatter.path}>
                {frontmatter.title}
              </h1>
            )
          })
        }
        <Link to="/">Go back to the homepage</Link>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }    
  }
`

export default Blog;
