import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import workExperienceData from '../data/work-experience.json'

const WorkExperience = () => {
  return (
    <Section>
      <Head>Work Experience</Head>
      <Body>
        <div className="space-y-2">
          {workExperienceData.map(
            ({ title, company, dates, achievements }, index) => (
              <div key={index}>
                <SubTitle className="font-bold">{title}</SubTitle>
                <SubTitle>{company}</SubTitle>
                <SubTitle>{dates}</SubTitle>
                <ul className="list-disc pl-4">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </Body>
    </Section>
  )
}

export default WorkExperience
