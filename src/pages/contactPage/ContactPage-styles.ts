import styled from "styled-components";
import bgBoyDev from "../../assets/contactPage/bg-boy-dev.png"
import bgBoyBottom from "../../assets/contactPage/bg-boy-bottom.png"
import bgKeyboard from "../../assets/contactPage/bg-keyboard.png"
import bgMessage from "../../assets/contactPage/bg-message.png"
import bgNext from "../../assets/contactPage/bg-next.png"

export const Contact = styled.section`
    width: 100%;
    border-bottom: 1px solid rgba(238, 238, 238, 0.1);
`

export const ContactInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
    background-image: url(${bgKeyboard}), url(${bgMessage});
    background-repeat: no-repeat, no-repeat;
    background-position: 66% 7%, 92% 83%;
    flex-wrap: wrap;
    @media (max-width: 1228px) {
        justify-content: center;
    }
`
export const ContactLeft = styled.div`
    width: 600px;
    height: 530px;
    margin-top: 258px;
    background-image: url(${bgBoyDev}), url(${bgBoyBottom}), url(${bgNext});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 220px 92%, 205px 100%, 20px 230px;
    margin-bottom: 258px;
    @media (max-width: 1228px) {
        margin-bottom: 50px;
    }
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
export const Form = styled.form`
    margin-top: 258px;
    width: 600px;
    @media (max-width: 1228px) {
        margin-top: 0;
        margin-bottom: 50px;
    }
`

export const Input = styled.input`
    width: 288px;
    height: 59px;
    background: rgba(57, 62, 70, 0.5);
    border-radius: 16px;
    padding: 24px;
    border: 0;
    font-weight: 700;
    font-size: 18px;
    color: #eee;
    outline: 0;
    &::placeholder{
        font-weight: 700;
        font-size: 18px;
        color: rgba(238, 238, 238, 0.5);
    }

`

export const TextArea = styled.textarea`
    width: 600px;
    height: 280px;
    background: rgba(57, 62, 70, 0.5);
    border-radius: 16px;
    border: 0;
    resize: none;
    outline: 0;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 18px;
    color: #eee;
    &::placeholder{
        font-weight: 700;
        font-size: 18px;
        color: rgba(238, 238, 238, 0.5);
    }
`

export const Label = styled.label`
    display: block;
    font-weight: 700;
    font-size: 18px;
    color: #eee;
    margin-bottom: 10px;
`
export const Button = styled.button`
    border-radius: 24px;
    padding: 10px 32px;
    width: 232px;
    height: 47px;
    font-weight: 700;
    font-size: 18px;
    color: #eee;
    background-color: #00adb5;
    border: 0;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin-top: 34px;
`