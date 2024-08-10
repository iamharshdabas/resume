import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const SubTitle = ({ children, className }) => {
  return (
    <h2 className={twMerge('text-sm leading-relaxed', className)}>
      {children}
    </h2>
  )
}

SubTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default SubTitle
