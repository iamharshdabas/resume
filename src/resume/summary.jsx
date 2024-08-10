import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import summaryData from '../data/summary.json'

const Summary = () => {
  return (
    <Section>
      <Head>Summary</Head>
      <Body>
        <div className="space-y-2">
          {summaryData.map((item, index) => (
            <div key={index}>
              <SubTitle>{item.text}</SubTitle>
            </div>
          ))}
        </div>
      </Body>
    </Section>
  )
}

export default Summary
