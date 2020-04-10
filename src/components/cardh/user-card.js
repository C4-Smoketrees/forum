import React from 'react'

class UserCard extends React.Component {
  constructor (props) {
    super(props)

    this.user = {
      name: props.name,
      descriptionUser: props.descriptionUser
    }
  }

  render () {
    return (
      <div className='user-card'>
        <div className='user-back'>
          <img className='user-circle' />
        </div>
        <div className='user-name'>
          {this.user.name}
        </div>
        <div className='user-details-home'>
          {this.user.descriptionUser}
        </div>
      </div>
    )
  }
}

export default UserCard
