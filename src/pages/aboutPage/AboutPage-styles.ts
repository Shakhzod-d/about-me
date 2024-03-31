import styled from "styled-components";
import bgBoyBack from '../../assets/aboutPage/bg-boy-back.png';
import bgBoyDev from '../../assets/aboutPage/bg-boy-dev.png';
import bgBoyBottom from '../../assets/aboutPage/bg-boy-bottom.png';
import bgNext from '../../assets/aboutPage/bg-next.png';
import bgMusic from '../../assets/aboutPage/bg-music.png';
import bgLight from '../../assets/aboutPage/bg-light.png'

export const About = styled.section`
    width: 100%;
`
export const AboutInner = styled.div`
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
    background-image: url(${bgMusic}), url(${bgLight}), url(${bgNext});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0 15%, 30% 32%, 15% 85%;
`

export const Line = styled.div`
    border-top: 1px solid rgba(238, 238, 238, 0.1);
    width: 100%;
    height: 132px;
    margin-bottom: 132px;
`

export const AboutLeft = styled.div`
    max-width: 389px;
    margin-top: 256px;
`

export const AboutRight = styled.div`
    margin-top: 230px;
    width: 665px;
    height: 560px;
    background-image: url(${bgBoyBack}), url(${bgBoyDev}), url(${bgBoyBottom});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 100% -35px, 107px 190px, 150px 100%;
    margin-bottom: 84px;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 64px;
    color: #eee;
    span{
        color: #00adb5;
    }
`
export const Text = styled.div`
    font-size: 18px;
    color: rgba(238, 238, 238, 0.75);
    span{
        color: #eee;
        cursor: pointer;
    }
`