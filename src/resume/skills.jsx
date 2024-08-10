import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import skillsData from '../data/skills.json'

const Skills = () => {
  return (
    <Section>
      <Head>Skills</Head>
      <Body>
        <div className="space-y-2">
          {skillsData.map(({ category, skills }, index) => (
            <div key={index}>
              <SubTitle>
                <span className="font-bold">{category}: </span>
                <span>{skills}</span>
              </SubTitle>
            </div>
          ))}
        </div>
      </Body>
    </Section>
  )
}

export default Skills
