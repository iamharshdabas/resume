import { Github, Mail, Phone } from 'lucide-react'
import IconBg from '../components/icon-bg.jsx'
import { Section, Head, Body } from '../components/section'
import SubTitle from '../components/subtitle.jsx'
import contactData from '../data/contact.json'

const iconMap = {
  Mail: Mail,
  Github: Github,
  Phone: Phone,
}

const Contact = () => {
  return (
    <Section>
      <Head>Contact</Head>
      <Body>
        <div className="space-y-2">
          {contactData.map(({ type, icon, href, text }, index) => {
            const IconComponent = iconMap[icon]

            return (
              <div key={index}>
                <SubTitle className="flex items-center gap-4">
                  <IconBg>
                    {IconComponent && (
                      <IconComponent className="text-zinc-100" />
                    )}
                  </IconBg>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    type={type}
                    href={href}
                  >
                    {text}
                  </a>
                </SubTitle>
              </div>
            )
          })}
        </div>
      </Body>
    </Section>
  )
}

export default Contact
