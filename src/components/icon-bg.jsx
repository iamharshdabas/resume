import PropTypes from 'prop-types'

const IconBg = ({ children }) => {
  return (
    <div className="flex size-8 items-center justify-center rounded-md bg-zinc-900">
      {children}
    </div>
  )
}

IconBg.propTypes = {
  children: PropTypes.node,
}

export default IconBg
