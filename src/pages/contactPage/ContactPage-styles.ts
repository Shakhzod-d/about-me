import styled from "styled-components";
import bgBoyDev from "../../assets/contactPage/bg-boy-dev.png"
import bgBoyBottom from "../../assets/contactPage/bg-boy-bottom.png"
import bgKeyboard from "../../assets/contactPage/bg-keyboard.png"
import bgMessage from "../../assets/contactPage/bg-message.png"
import bgNext from "../../assets/contactPage/bg-next.png"

export const Contact = styled.section`
    width: 100%;
`

export const ContactInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
`
export const ContactLeft = styled.div`
    width: 600px;
    height: 530px;
    margin-top: 258px;
    background-image: url(${bgBoyDev}), url(${bgBoyBottom});
    background-repeat: no-repeat, no-repeat;
    background-position: 220px 92%, 205px 100%;
    margin-bottom: 258px;
    
`
export const ContactRight = styled.div`
    margin-top: 258px;
    width: 600px;
`

export const Title = styled.div`
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 64px;
    color: #eee;
    span{
        color: #00adb5;
    }
`