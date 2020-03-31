import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import SEO from "../components/seo"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  margin-top: 50px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="" />
      <Wrapper>
        <Body className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Body>
        <Link to="/">Go back to the homepage</Link>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`