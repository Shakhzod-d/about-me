
import { Header1, HeaderInner, Logo, Nav } from './Header-styles'

const Header = () => {
  return (
    <Header1>
        <HeaderInner>
            <Logo>SaulDesign</Logo>
            <Nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Nav>
        </HeaderInner>
    </Header1>
  )
}

export default Header