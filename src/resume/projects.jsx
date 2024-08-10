import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import projectData from '../data/projects.json'

const Projects = () => {
  return (
    <Section>
      <Head>Projects</Head>
      <Body>
        <div className="space-y-2">
          {projectData.map(({ title, url, description }) => (
            <div key={title}>
              <SubTitle className="font-bold">
                {title}:{' '}
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  ({new URL(url).hostname})
                </a>
              </SubTitle>
              <SubTitle>{description}</SubTitle>
            </div>
          ))}
        </div>
      </Body>
    </Section>
  )
}

export default Projects
