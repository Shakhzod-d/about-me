import styled from "styled-components";
import bgBoyBack from '../../assets/homePage/bg-boy-back.png';
import bgBoyDev from '../../assets/homePage/bg-boy-dev.png';
import bgBoyBottom from '../../assets/homePage/bg-boy-bottom.png';
import bgNext from '../../assets/homePage/bg-next.png'

export const Home = styled.section`
`

export const HomeInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
    padding-top: 202px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 64px;
    @media (max-width: 1143px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const HomeLeft = styled.div`
    padding-left: 84px;
    background-image: url(${bgNext});
    background-repeat: no-repeat;
    background-position: 0 40px;
`
export const HomeRight = styled.div`
    width: 570px;
    height: 530px;
    background-image: url(${bgBoyBack}), url(${bgBoyDev}), url(${bgBoyBottom});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 100% -35px, 20px 145px, 20px 100%;
    
`

export const NextBtn = styled.button`
    width: 96px;
    height: 96px;
    background-color: rgba(57, 62, 70, 0.75);
    backdrop-filter: blur(8px);
    border: 0;
    align-self: center;
    cursor: pointer;
`
