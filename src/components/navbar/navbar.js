import React from 'react'
import ToggleButton from '../side-drawer/toggle'
// import { search } from 'node-emoji'
import Search from '../search/search'

const Navbar = (props) => {
  const onToggleClick = props.onToggleClick
  return (
    <header className='navbar'>
      <nav className='navigation'>
        <div>
          <ToggleButton handleOnClick={onToggleClick} />
        </div>
        <div className='nav-logo' style={{ fontWeight: 'bold' }}>
          <img
            className='logo'
            src='http://localhost:3000/svg/logo.svg'
            alt='c4-logo'
          />
          <a href='/'>C4</a>
        </div>
        <div className='nav-items'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Forum</a></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Blog</a></li>
          </ul>
        </div>
        <div className='space' />
        <Search />
        <div className='nav-user'>
          <img className='nav-user-photo' src={props.user.photoLink} />
          <a
            className='nav-user-name'
            href='/'
          >
            {props.user.name}
          </a>
        </div>
        <div className='logout nav-user'>
          <a
            className='nav-user-name'
            href='/' style={{ fontWeight: 'lighter', margin: '0 10px' }}
          >
            Logout
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
