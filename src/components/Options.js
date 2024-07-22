import React from 'react'

const Options = ({name}) => {
  return (
    <form>
      <input type='checkbox' id={`${name}_option`}/>{''}
      <label htmlFor={`${name}_option`}>{name}</label>
    </form>
  )
}

export default Options