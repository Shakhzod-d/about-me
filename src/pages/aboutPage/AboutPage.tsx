
import { useState } from "react"
import { About, AboutInner, AboutLeft, AboutRight, Title, Text, Line } from "./AboutPage-styles"

const text: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quibusdam aliquam, molestiae similique commodi, delectus assumenda doloribus odio neque dolores iusto, odit sit ipsum veritatis voluptas labore rerum! Dignissimos fugit labore explicabo, tenetur quisquam in ullam doloribus dolor officiis aspernatur dolorem! Atque ut quasi non debitis placeat aliquid exercitationem ab dolorum! Asperiores voluptatibus vitae delectus tempore veritatis quam, facilis excepturi nemo similique ut. In quibusdam iure, nostrum inventore placeat exercitationem provident rem beatae reprehenderit dolores eligendi eveniet quo laborum aperiam fugit, possimus a voluptate corporis fuga iusto suscipit. Similique optio nobis eum reiciendis doloribus, atque quaerat sint debitis ad numquam.'



const AboutPage = () => {
  const [isText, setIsText] = useState<boolean>(false)
  const cutText = (text: string): string => {
    return `${text.slice(0, 300)} . . .` 
  }
  return (
    <About >
      <AboutInner id='about'>
        <AboutLeft style={{maxWidth: isText ? '1248px' : '500px'}}>
          <Title>About <span>me</span></Title>
          <Text >{ isText ? text : cutText(text)}<span onClick={() => {setIsText(!isText)}}>{isText ? ' Read less' : ' Read more'}</span></Text>
        </AboutLeft>
        <AboutRight style={{opacity: isText ? '0' : '100%'}}></AboutRight>
      </AboutInner>
      <Line />
    </About>
  )
}

export default AboutPage