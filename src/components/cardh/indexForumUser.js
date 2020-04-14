import React from 'react'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.user = props.user
  }

  render () {
    return (
      <div className='indexforum-first-box'>
        <div className='indexforum-question'>
          <div className='indexforum-first-box-header'>
            <a href='' className='indexforum-first-box-header'>What is dev?</a>
          </div>
          <div className='indexforum-first-box-details'>
            I need to know this!!
          </div>
        </div>
        <div className='indexforum-user'>
          <div className='indexforum-user-name'>
            {this.user.name}
          </div>
          <div className='indexforum-user-des'>
            {this.user.descriptionUser}
          </div>
        </div>
        <div className='indexforum-time'>
          {this.user.time}
        </div>
      </div>
    )
  }
}

export default User
