import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const Title = ({ children, className }) => {
  return (
    <h1 className={twMerge('font-display text-4xl uppercase', className)}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Title
