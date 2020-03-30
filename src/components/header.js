import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  background: linear-gradient(to right, rgb(146, 254, 157) 0%, rgb(0, 201, 255) 100%);
  margin-bottom: 1.45rem;
`
const Nav = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`
const NavItem = styled(Link)`
  color: #333;
  text-decoration: none;
  transition: all .2s;

  &:hover {
    color: #666;
  }
`
const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 10px;
  }
`


const Header = ({ siteTitle }) => (
  <Wrapper>
    <Nav>
      <NavLeft>
        <NavItem to="/">{siteTitle}</NavItem>
      </NavLeft>
      <NavRight>
        <NavItem to="/docs">Docs</NavItem>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </NavRight>
    </Nav>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
