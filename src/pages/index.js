import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const intro = {
  title: "It's never been easier to search!",
  cover_img: "https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"
}
const features = [
  {
    title: "Powered by Gatsby",
    detail: "Starting from v2, Docz is entirely built using GatsbyJS. It's optimised for a lightning fast development experience and speedy build times. This also allows you to leverage GatsbyJS's huge ecosystem of plugins and tools.",
    icon: "https://www.docz.site/static/img/gatsby.aec012ae.svg"
  },
  {
    title: "Zero config",
    detail: "No need to worry about complex configuration settings to build and run your documentation. With Docz you can create customizable sites with a single command.",
    icon: "https://www.docz.site/static/img/magic-wand.e33bd29f.svg"
  },
  {
    title: "Easy to customize",
    detail: "Using component shadowing you can create your own theme or customize the provided theme to make your documentation website stand out.",
    icon: "https://www.docz.site/static/img/settings.2a37a784.svg"
  },
  {
    title: "Based on MDX",
    detail: "MDX is Markdown + JSX, it brings the world of components to Markdown. MDX makes it possible to import and use your components in Markdown-style files. Docz fully leverages this, and provides many built-in components that augment and speed up your documentation workflow.",
    icon: "https://www.docz.site/static/img/mdx.cd4eef27.svg"
  }
]

const SectionIntro = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 50px 0px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled(Link)`
  display: block;
  margin: 3px 5px;
  background-color: rgb(66, 99, 247);
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all, .2s;

  &:hover {
    background-color: rgba(66, 99, 247, .8);
  }
`
const SectionFeatures = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`
const FeatureList = styled.div`
  display: grid;
  justify-content: center;
  margin: 60px 0px;
  gap: 60px;
`
const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
`
const FeatureIcon = styled.img`
  margin: 0px 40px;
  height: 100px;
`
const FeatureDetail = styled.div`
  display: flex;
  flex-direction: column;
`
const SectionMore = styled.div`
  min-height: 900px;
  padding: 50px 0;
  background-image: url('https://www.docz.site/static/img/dark-pattern2.a5e4507a.png');
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1 {
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionIntro>
      <h1>{intro.title}</h1>
      <img alt="" src={intro.cover_img}/>
      <ButtonContainer>
        <Button to="docs">Getting Started</Button>
        <Button to="docs">Documentation</Button>
      </ButtonContainer>
    </SectionIntro>
    <SectionFeatures>
      <FeatureList>
        {features.map((feature, i) => {
          return (
            <FeatureItem key={i}>
              <FeatureIcon src={feature.icon} alt=""/>
              <FeatureDetail>
                <h2>{feature.title}</h2>
                <p>{feature.detail}</p>
              </FeatureDetail>
            </FeatureItem>
          )
        })}     
      </FeatureList>
    </SectionFeatures>
    <SectionMore>
      <h1>How to</h1>
      <p>Install Kala Search as a dependency</p>
      <p>Create an .mdx file anywhere in your project</p>
      <p>That's it, your docs are ready to go !</p>
      <Button to="docs">More Info</Button>
    </SectionMore>
  </Layout>
)

export default IndexPage
