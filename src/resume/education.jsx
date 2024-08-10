import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import educationData from '../data/education.json'

const Education = () => {
  return (
    <Section>
      <Head>Education</Head>
      <Body>
        <div className="space-y-2">
          {educationData.map(({ institution, dates, degree }, index) => (
            <div key={index}>
              <SubTitle className="flex justify-between">
                <span>{institution}</span>
                <span>{dates}</span>
              </SubTitle>
              <SubTitle>{degree}</SubTitle>
            </div>
          ))}
        </div>
      </Body>
    </Section>
  )
}

export default Education
