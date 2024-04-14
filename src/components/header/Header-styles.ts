import styled from "styled-components";

export const Header1 = styled.header`
    border-bottom: 1px solid rgba(238, 238, 238, 0.1);

`

export const Logo = styled.div`
    cursor: pointer;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 24px;
    color: #eee;
`

export const HeaderInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
`
export const Nav = styled.nav`
    ul{
        display: flex;
        list-style: none;
        font-weight: 400;
        font-size: 18px;
        color: #eee;
        gap: 48px;
        li{
            cursor: pointer;
        }
    }
`