import React from 'react'
import Hashes from '../cardh/user-hashtag'
import Activity from '../cardh/activity'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <div className='user-profile'>
        <img className='user-circle-profile' src='' />
        <div className='user-name-profile'>
          {props.user.name}
          <div className='userId'>
            {props.user.emailId}
          </div>
        </div>
      </div>
      <ul>
        <li><a href='/home'>Home</a></li>
      </ul>
      <div className='hash'>
        <Hashes numberHash={props.user.Hash.number} arrayHash={props.user.Hash.arrayHash} />
        <Activity likes={props.user.likes} issuesSolved={props.user.issuesSolved} issues={props.user.issues} />
      </div>
      <div className='activity-side' />
    </nav>
  )
}

export default sideDrawer
