import styled from "styled-components";
import bgPhoto from "../../assets/worksPage/bg-photo.png"

export const Works = styled.section`
    width: 100%;
    background-image: url(${bgPhoto});
    background-repeat: repeat;
`
export const WorksInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
    padding-top: 236px;
    padding-bottom: 270px;
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

export const WorkCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
`
export const WorkCard = styled.div`
    width: 368px;
    height: 280px;
    border-radius: 16px;
    backdrop-filter: blur(4px);
    background: rgba(57, 62, 70, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
