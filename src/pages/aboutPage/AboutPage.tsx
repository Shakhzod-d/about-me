import { About, AboutInner, AboutLeft, AboutRight, Title, Text, Line} from "./AboutPage-styles"

const AboutPage = () => {
  return (
    <About>
          <AboutInner>
              <AboutLeft>
                <Title>About <span>me</span></Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <span>Read more</span></Text>
              </AboutLeft>
              <AboutRight></AboutRight>
          </AboutInner>
          <Line/>
    </About>
  )
}

export default AboutPage