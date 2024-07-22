import React from 'react'

const ErrorBanner = ({message}) => {
    let errorMessage = message || 'Error Occurred';
  return (
    <div>{errorMessage}</div>
  )
}

export default ErrorBanner