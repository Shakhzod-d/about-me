import styled from "styled-components";

export const Footer1 = styled.footer`
    margin: 0 auto;
    max-width: 1248px;
    padding: 100px 0 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Ul = styled.ul`
display: flex;
gap: 24px;
    li{
        list-style: none;
        font-size: 18px;
        color: #eee;
        cursor: pointer;
    }
`

export const FooterText = styled.p`
    align-self: end;
    font-size: 18px;
    color: rgba(238, 238, 238, 0.75);
`