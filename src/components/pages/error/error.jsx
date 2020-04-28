import React from 'react'

class Error extends React.Component {
  render () {
    return (
      <div className='error'>
        <img src='http://localhost:3000/svg/error.svg' />
        <h1>Oops!</h1>
        <div className='error-description'>
          An error occured! Thats embarassing!
        </div>
      </div>
    )
  }
}

export default Error
