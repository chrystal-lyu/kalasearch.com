import React from "react"
import styled from 'styled-components';
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`
const BlogItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  margin-top: 50px;
  color: #333;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #333;
    transition: all .2s;

    &:hover {
      color: rgb(66, 99, 247)
    }
  }
`
const BlogDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  div {
    margin-top: 10px;
    color: #666;
  }
`
const CoverImg = styled.img`

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
              <BlogItem key={frontmatter.path}>
                <CoverImg src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"/>
                <BlogDetail>
                  <Link to={frontmatter.path}>
                    {frontmatter.title}
                  </Link>
                  <div>{frontmatter.date}</div>
                  <div>{frontmatter.author}</div>
                  <div>{frontmatter.snippet}</div>
                </BlogDetail>
              </BlogItem>
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
            author
            snippet
          }
        }
      }
    }    
  }
`

export default Blog;
