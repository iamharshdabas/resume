import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import Title from './title'

const SectionContext = createContext()

const useSectionContext = () => {
  return useContext(SectionContext)
}

const Section = ({ children }) => {
  const [head, setHead] = useState(null)
  const [body, setBody] = useState(null)

  const value = { head, setHead, body, setBody }

  return (
    <SectionContext.Provider value={value}>
      <div className="space-y-2 py-6">
        {head && <Title>{head}</Title>}
        {body && <div>{body}</div>}
        {children}
      </div>
    </SectionContext.Provider>
  )
}

const Head = ({ children }) => {
  const { setHead } = useSectionContext()

  useEffect(() => {
    setHead(children)
  }, [children, setHead])

  return null
}

const Body = ({ children }) => {
  const { setBody } = useSectionContext()

  useEffect(() => {
    setBody(children)
  }, [children, setBody])

  return null
}

Section.propTypes = {
  children: PropTypes.node,
}

Head.propTypes = {
  children: PropTypes.node,
}

Body.propTypes = {
  children: PropTypes.node,
}

export { Body, Head, Section }
