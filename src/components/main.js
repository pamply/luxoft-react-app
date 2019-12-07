import React from 'react'
import PropTypes from 'prop-types'

const Main = props => {
  const { email } = props.history.location.state
  return <div>Hello {email}</div>
}

Main.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.object
    })
  })
}

export default Main
