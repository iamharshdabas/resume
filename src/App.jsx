import Contact from './resume/contact'
import Education from './resume/education'
import JobTitle from './resume/job-title'
import Layout from './resume/layout'
import Name from './resume/name'
import Projects from './resume/projects'
import Skills from './resume/skills'
import Summary from './resume/summary'
import WorkExperience from './resume/work-experience'

const App = () => {
  return (
    <Layout>
      <div className="flex h-full w-full">
        <div className="w-[46%] bg-zinc-200 p-8 pr-8">
          <Name />
          <Contact />
          <Summary />
          <Skills />
          <Education />
        </div>

        <div className="flex-1 p-8 pl-8">
          <JobTitle />
          <div className="pt-[76px]">
            <WorkExperience />
            <Projects />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
