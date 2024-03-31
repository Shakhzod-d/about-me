import React from 'react'
import { Header1, HeaderInner, Logo, Nav } from './Header-styles'

const Header = () => {
  return (
    <Header1>
        <HeaderInner>
            <Logo>SaulDesign</Logo>
            <Nav>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
            </Nav>
        </HeaderInner>
    </Header1>
  )
}

export default Header