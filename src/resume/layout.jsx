import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      <div className="relative h-a4 w-a4 overflow-hidden bg-zinc-100">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
